


<template>
  <div class="min-h-screen flex flex-col justify-between">
    <HeroPic text="checkout." :link="require('@/assets/Texture_02_SD.jpeg')" />
  <div class="w-full flex flex-col justify-center items-center">
    <div v-for="item in store.basket" class=" w-[90%] max-w-2xl py-4 border-b" >
          
          <div class="relative flex flex-row items-center space-x-2" v-motion-fade>
            <img class="h-24 w-24" :src="item.image" alt="">
            <div class="flex flex-col justify-start space-y-1">
              <h3>{{item.name}}</h3>
              <div>
                <p>{{ item.qty }} x  {{ (item.currency == 'eur' ? '€' : item.currency) }} {{ item.price/100 }}.00 </p>
              </div>
            </div>
            <div class="absolute flex flex-col justify-around top-0 right-0 h-full hover:cursor-pointer" >
              <div class="w-8 h-8  flex items-center justify-center" @click="store.removeItemAll(item.id)">
                X
              </div>
              <div class="w-8 h-8  flex items-center justify-center" @click="store.removeItem(item.id)">
                -
              </div>
            </div>
          
          </div>
          
        </div>
        <div v-if="store.numberProducts!=0" class="w-[80%] max-w-xl flex justify-between  mt-10">
          <p>Subtotal</p>
          <p>
            € {{ store.total }}.00
          </p>
        </div>
       

  </div>

 



  <BuyStripe class="my-10" v-if="store.numberProducts!=0" />


  </div>
  

  <!-- <div class="h-10"></div>
  <Products /> -->
</template>

<script>
// @ is an alias to /src
import {useProductStore} from "@/stores/productStore.js"

import BuyStripe from "@/components/CheckoutButtonStripe.vue";
import Products from "@/components/Products.vue";
import HeroPic from "@/components/HeroPic.vue";



export default {
  setup(){
    const store = useProductStore();
    console.log(store.basket)

    async function addItemToCart(id){
      console.log("BUTTON WORKS",id)
      store.addItem(id,1)
      
    }
  
    async function removeItemFromCart(id){
      store.removeItem(id)
    }
    return{
      store,
      addItemToCart,
      removeItemFromCart
    }
  },
  mounted(){
    document.body.classList.remove("overflow-hidden")
  },
  name: "HomeView",
  components: {
    Products,
    HeroPic,
    BuyStripe
  }
  
}

</script>
