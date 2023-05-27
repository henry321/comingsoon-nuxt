import {defineStore} from 'pinia';
//import axios from 'axios'

export const useProductStore =  defineStore('ProductStore',{
  


  state: () =>{
    return {
      dataProducts:[],
      dataBasket:[],
      dataTotal:0.00,
      dataNumberProducts:0,
      counterData:0
    }
  },
  persist: true,
  getters:{
    products(state){
      // all available products
      return state.dataProducts
    },
    basket(state){
      // products in shopping basket
      return state.dataBasket
    },
    total(state){
      // total of shopping basket
      return state.dataTotal
    },
    numberProducts(state){
      return state.dataNumberProducts
    },
    counter(state){
      return state.counterData
    }


  },
  actions:{
    counterInc() {
      this.counterData ++
    },
    test(){
      console.log("test")
    },
    calc(){
      // Calculates Values for Number and Total if Something is changed. 
      let accTotal = 0.00
      let accNumber = 0
      for(let i=0; i<this.dataBasket.length; i++){
        accTotal += this.dataBasket[i].price*this.dataBasket[i].qty/100
        accNumber += this.dataBasket[i].qty
      }
      this.dataTotal = accTotal 
      this.dataNumberProducts = accNumber
    },
    emptyBasket(){
      this.dataBasket = [];
      this.calc();
    },
  
    addItem(id, qty){
      // Check wether qty is right type, turn into 1 if not 
      let quantity = (typeof qty == 'number' ? qty : 1 )
      console.log("ADD ITEM",id, quantity)
      let index = this.dataBasket.findIndex(e => e.id==id)
      // Item already exists 
      if(index>=0){
        this.dataBasket[index].qty +=quantity
        console.log("Update qty",id, this.dataBasket[index].qty)
      }
      // Item is new in Basket
      else{
        // Add Item out of products Array 
        let product = this.products.find(e=>e.id==id)
        console.log(product)
        if (product){
          product.qty= quantity
          this.dataBasket.push(product)
        }
        else{
          // No item with given ID 
          console.log("ITEM NOT FOUND")
        }
      }
      // Calculate new total
      this.calc(); 
    },
    removeItem(id){
      let index = this.dataBasket.findIndex(e => e.id==id)
      if(index >= 0){
      // Product EXISTS
        this.dataBasket[index].qty -=1;
        console.log("Update qty",id, this.dataBasket[index].qty)
        if(this.dataBasket[index].qty <= 0){
          console.log("Removed Item",id)
          // QUANTITY IS ZERO, Prod removed
          this.dataBasket.splice(index,1)
        }
      }
      else{
        console.log("No such item")
      }
      this.calc(); 

    },
    removeItemAll(id){
      let index = this.dataBasket.findIndex(e => e.id==id)
      if(index >= 0){
        this.dataBasket.splice(index,1)
      }
      else{
        console.log("No such item")
      }
      this.calc(); 
    },
    async fetch(){
      const { data } = await useFetch('/api/products').catch(e=>{
        console.log("Error while fetching Data",e)
      })
      if (data && data.value) {
        console.log(`Fetched ${data.value.length} Products`)
        this.dataProducts = data.value;
      }
      else {
        setTimeout(fetch(),10000)
      }
    },
    // Old and not working
    async fetchProducts(){
      fetch('/api/products')
      .then(res =>res.json())
      .then(result=>{
        console.log("Products fetched:",result)
        this.dataProducts = result
        this.calc()
        return this.products
      })
      .catch(err=>{
        //setTimeout(()=>{this.fetchProducts()},10000)
        //console.log("Products could not be loaded",err)
        return err;
      })
    }
  },
 

  // getters 

})