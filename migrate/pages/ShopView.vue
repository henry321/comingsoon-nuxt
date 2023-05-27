


<template>
  <HeroPic text="shop." :link="require('@/assets/Texture_02_SD.jpeg')" />
  <div class="w-screen flex items-center justify-center">
    <div class="flex items-center justify-center w-screen max-w-6xl">
      <div class="grid md:grid-cols-2 grid-cols-1 w-[90%] gap-10 ">
        <div v-for="product in store.products" class=" flex flex-col"
          v-motion
          :initial="{ opacity: 0, y: 0 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="200">
      <!-- <img class="h-64" :src="product.image" alt=""> -->
      <router-link class="" :to="{ path: product.name}">
        <div class=" bg-center bg-cover h-64 flex flex-col space-y-8 items-center justify-center hover:scale-105 transition-all duration-250" 
      :style="{ backgroundImage: `url(${product.image_backdrop})` }">
        <h3>{{product.name}}</h3> 
        <h5>{{ product.description }}</h5>
      </div>
      </router-link>

      
      <div class="flex justify-between mt-4">
        <p>{{ (product.currency == 'eur' ? '€' : product.currency) }}{{ product.price/100 }}.00</p>
        <button @click="addItemToCart(product.id)">Add To Cart</button>
      </div>
    </div>
  </div>

  </div>

  </div>
  

  <!-- <div class="h-10"></div>
  <Products /> -->
</template>

<script>
// @ is an alias to /src
import {useProductStore} from "@/stores/productStore.js"

import Cart from "@/components/Cart.vue";
import Products from "@/components/Products.vue";
import HeroPic from "@/components/HeroPic.vue";



export default {
  setup(){
    const store = useProductStore();
    let itemName = ''
    console.log(store.basket)

    async function addItemToCart(id){
      console.log("BUTTON WORKS",id)
      store.addItem(id,1)
      
    }
    async function addItemToCartForm(){
      store.addItem(itemName)
    }
    async function removeItemFromCart(id){
      store.removeItem(id)
    }
    return{
      store,
      itemName,
      addItemToCart,
      addItemToCartForm,
      removeItemFromCart
    }
  },
  mounted(){
    document.body.classList.remove("overflow-hidden")
  },
  name: "HomeView",
  components: {
    Cart,
    Products,
    HeroPic
  }
  
}

</script>
