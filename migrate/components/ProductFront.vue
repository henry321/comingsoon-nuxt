<!-- Component for Homeview -->
<script setup>
import {useProductStore} from "@/stores/productStore.js"
import { useRouter } from 'vue-router'
const store = useProductStore();  
const router = useRouter();


</script>

<template>
  <div class="">
    <div class="h-screen-70 w-screen flex flex-col bg-cover bg-center items-center justify-center"
  :style="{'background-image': 'url(' + prod.image_backdrop + ')'}"
  >
    <!-- DISTINCTION -->
    <div
    class="md:w-[80%] w-[90%] md:h-[70%] h-[80%] max-h-96 max-w-4xl max-h-screen/3
    flex flex-col-reverse items-center justify-around md:space-x-10 md:space-y-0 "
    :class="{'md:flex-row-reverse ':reverse,'md:flex-row':!reverse}"
    >
      <div class="flex flex-col items-center justify-around  md:h-[70%] h-[30%] m-4">
        <div class="flex flex-col space-y-2">
          <h2 v-motion-slide-visible-right class="tracking-widest text-center">{{prod.name}}</h2>
          <h3 v-motion-pop-visible class="text-center">{{prod.description}}</h3>
        </div>
        <div class="flex md:flex-col flex-row items-center justify-center md:space-y-5 md:space-x-0 space-x-5 mt-2">
          <button class="buttonStyled"
            @click="router.push('/'+prod.name)"
            >Learn More</button>
            <button class="buttonStyled"
            @click="store.addItem(prod.id)"
            >Add To Cart</button>
        </div>
        
        
        
      </div>
      <!-- <img :src="prod.image_library" 
      alt=""
      class="object-fit w-[60%] md:w-[50%] max-w-lg hover:scale-105 transition-all druation-250 hover:cursor-pointer"
      @click="router.push('/'+prod.name)"> -->
      <!-- <div class="md:h-96 md:w-96 w-56 bg-center bg-cover 
      hover:cursor-pointer hover:scale-105 transition-all duration-250"
      @click="router.push('/Distinction')"
      :style="{'background-image': 'url(' +prod.image_library + ')'}"
      > -->
        <!-- <img class="object-cover object-center" :src="store.products.find(e=>e.name=='Distinction').image" alt=""> -->
      <!-- </div> -->
      
    </div>
  
   
  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    reverse:Boolean,
    prod: {}
  }
}
</script>