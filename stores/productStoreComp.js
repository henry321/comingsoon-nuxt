import {defineStore} from 'pinia';
import {ref} from 'vue'
//import axios from 'axios'

export const useProductStore =  defineStore('ProductStore', () =>{
  const products = ref([])
  const basket = ref([])
  const total = ref(0.00)
  const numberProducts = ref(0)

  function calc(){
    // Calculates Values for Number and Total if Something is changed. 
    let accTotal = 0.00
    let accNumber = 0
    for(let i=0; i<basket.value.length; i++){
      accTotal += basket.value[i].price*basket.value[i].qty/100
      accNumber += basket.value[i].qty
    }
    total.value = accTotal 
    numberProducts.value = accNumber
  }
  
  function emptyBasket(){
    basket.value = [];
    calc();
  }

  function addItem(id, qty){
    // Check wether qty is right type, turn into 1 if not 
    let quantity = (typeof qty == 'number' ? qty : 1 )
    console.log("ADD ITEM",id, quantity)
    let index = basket.value.findIndex(e => e.id==id)
    // Item already exists 
    if(index>=0){
      basket.value[index].qty +=quantity
      console.log("Update qty",id, basket.value[index].qty)
    }
    // Item is new in Basket
    else{
      // Add Item out of products Array 
      let product = products.value.find(e=>e.id==id)
      console.log(product)
      if (product){
        product.qty= quantity
        basket.value.push(product)
      }
      else{
        // No item with given ID 
        console.log("ITEM NOT FOUND")
      }
    }
    // Calculate new total
    calc(); 
  }
  function removeItem(id){
    let index = basket.value.findIndex(e => e.id==id)
    if(index >= 0){
    // Product EXISTS
      basket.value[index].qty -=1;
      console.log("Update qty",id, basket.value[index].qty)
      if(basket.value[index].qty <= 0){
        console.log("Removed Item",id)
        // QUANTITY IS ZERO, Prod removed
        basket.value.splice(index,1)
      }
    }
    else{
      console.log("No such item")
    }
    calc(); 

  }
  function removeItemAll(id){
    let index = basket.value.findIndex(e => e.id==id)
    if(index >= 0){
      basket.value.splice(index,1)
    }
    else{
      console.log("No such item")
    }
    calc(); 
  }
  async function fetch2(){

    const {data} = await $fetch(`/api/products`,{
      headers: { "Content-type": "application/json" },
      method: 'GET',
    })
    console.log("fetch2",data)
  }
  async function fetchProducts(){
    console.log(".env")
    fetch('/api/products')
    .then(response => response.json())
    .then(result=>{
      console.log("Products fetched:",result)
      products.value = result
      calc()
    })
    .catch(err=>{
      setTimeout(()=>{fetchProducts()},10000)
      console.log("Products could not be loaded",err)
      return err;
    })
  }
  //onMounted(fetchProducts)

  return {
    products, basket, numberProducts, total, 
    addItem, removeItem, removeItemAll, emptyBasket

  }


})

