<script setup>
import {useProductStore} from "@/stores/productStore.js"
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const store = useProductStore();
</script>
<template>
  <!-- FIRST PAGE -->
  <Hero link="https://blecksaudio.fra1.digitaloceanspaces.com/public-assets%2FLandingPage%2Fthunder.mp4" />
  <ProductFront :reverse=false :prod="store.products.find(e=>e.name=='Distinction')" />
  <ProductFront :reverse=false :prod="store.products.find(e=>e.name=='Addiction')" />


  
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue"
import Newsletter from "@/components/Newsletter.vue"
import BuyPaypal from "@/components/CheckoutButtonPaypal.vue"
import Cart from "@/components/Cart.vue"
import Products from "@/components/Products.vue"
import ProductFront from "@/components/ProductFront.vue"
import Ham from "@/components/HamburgerRotate.vue"


import BuyStripe from "@/components/CheckoutButtonStripe.vue"

export default {
  mounted(){
    document.body.classList.remove("overflow-hidden")
  },
  name: "HomeView",
  components: {
    BuyStripe,
    Cart,
    Products,
    Ham,
    Hero,
    ProductFront
  },
  setup(){
    
    // axios.get('http://localhost:5001/api/products').then(res=>{
    //   console.log(res.data)
    // })
    // setTimeout(()=>{
    //   console.log("products",productStore.getProducts)

    // },5000)
  },
};

</script>
