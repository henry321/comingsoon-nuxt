<template>
  <div 
    class="md:min-h-[30rem] min-h-[20rem] bg-cover bg-center flex items-center flex-col justify-center space-y-10" 
    :style="{'background-image':`url(${link})`}">
    <div class="text-center flex  flex-col space-y-3">
      <h1 class="mx-auto font-light tracking-widest uppercase">{{ title }}</h1>
      <h2 class="mx-auto lowercase"> {{ subtitle }}</h2>
    </div>
   
    <div>
      <button class="btn" @click="store.addItem(id)">add to cart</button>
    </div>
  </div>
</template>


<!-- <template>
  <div class="w-full h-64 md:h-96 relative"
    :class=this.background>

    <div class="w-full h-full transition-all duration-500 ease-in"
    :class=this.overlay>
      <img :src="link" alt=""
      @load="setBG"
      class="absolute top-0 z-0 object-cover object-center max-h-full min-h-full min-w-full bg-blend-color-dodge mix-blend-overlay">
    
    <div class="z-10 h-full flex items-center justify-center relative">
      <h3 class="font-bold tracking-widest lowercase"

      >{{text}}</h3>
    </div>

    </div>
      
  
  </div>
</template> -->
<script setup>
import { useProductStore } from '~~/stores/productStore';
const store = useProductStore();
</script>
<script>
export default{
  props: ['title','link','id','subtitle']
}



// export default {
//   data(){
//     return{
//       pic : "",
//       background:'bg-black',
//       overlay:''
//     }

//   },
//   methods:{
//     setBG(){
//       //console.log("loaded")
//       this.background = 'bg-gradient-to-b from-gray-400 to-black'
//       this.overlay = ""
//     }
//   },
//   name: 'HeroPic',
//   props: {
//     text: String,
//     link:String,
//   },
//   components:{
//   }

// }
</script>