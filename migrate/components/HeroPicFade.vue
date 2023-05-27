<template>
  <div 
    class="w-full h-64 md:h-96 relative 
    bg-cover bg-scroll bg-center bg-blend-overlay
    bg-gradient-to-b from-white to-black"
    :style="{'background-image': 'url(' + require('@/assets/Texture_02.png') + ')'}">
    <div class="z-10 h-full flex items-center justify-center relative">
      <h3 class="font-bold tracking-widest lowercase">{{text}}</h3>
    </div>
  
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  data(){
    return{
      pic : "",
    }

  },
  methods:{
    checkPicture(){
      if(this.link){

      }
      else if(this.locallink){
        console.log("locallink")
      }
    }
  },
  mounted(){
  },
  name: 'HeroPic',
  props: {
    text: String,
    link:String,
  },
  components:{
    Header
  }

}
</script>