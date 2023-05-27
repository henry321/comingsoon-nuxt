<script setup>
import {useProductStore} from "@/stores/productStore.js"
const store = useProductStore();  
const this_product = store.products.find(e=>e.name=='Addiction')
</script>


<template>
  <div class="h-screen/2 w-screen flex flex-col bg-cover bg-center items-center justify-center space-y-5"
  :style="{'background-image': 'url(' + this_product.image_backdrop + ')'}"
  >
    <h2>{{ this_product.name }}</h2>
    <h4>{{ this_product.purpose }}</h4>
    <h3>{{ this_product.description }}</h3>
    <h3>{{ this_product.currency == 'eur' ? '€' : this_product.currency }} {{ this_product.price /100}}.00</h3>
    <button class="buttonStyled" @click="store.addItem(this_product.id)">Add to Cart</button>
  </div>
  <div class="flex space-x-3 items-center justify-center w-screen">
    <div class="flex flex-col md:flex-row items-center justify-center max-w-4xl text-center space-x-4">
      <img :src="this_product.image_library" 
      alt=""
      class="object-fit w-[90%] md:w-3/4 max-w-lg">
      <div class="flex flex-col items-center justify-center space-y-3 md:text-left text-center">
        <h3>Lead Sounds and Drones for cinematics and scoring.</h3>
        <p class="tect-center">Distinction is a synthesizer with 3 Layers containing a wide variety of friction sounds:
          Bowed cymbals, rubbed percussion, wine and cognac glasses as well as bowed guitar strings.
        </p>
      </div>
    </div>
 
  </div>
  
 
</template>

<script>
// @ is an alias to /src

import Cart from "@/components/Cart.vue";
import Products from "@/components/Products.vue";
import HeroPic from "@/components/HeroPic.vue";



export default {
  
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
