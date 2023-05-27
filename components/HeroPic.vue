<template>
  <div 
    class="md:min-h-[30rem] min-h-[20rem] bg-cover bg-center flex items-center" 
    :style="{'background-image':`url(${link})`}">
    <h1 class="mx-auto">{{ text }}</h1>
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
  const bg = ref('bg-white')
</script>
<script>
export default{
  props: ['text','link']
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