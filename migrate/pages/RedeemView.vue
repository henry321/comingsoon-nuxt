<script setup>
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
import {ref} from 'vue'
const router = useRouter()
const route = useRoute()
const error = ref()
const loading = ref(false)
console.log(route.query)


const counter = ref(0)

const downloadCode = route.query.download_code ?  ref(route.query.download_code) :  ref('')
console.log(downloadCode.value)
function redeem(){
  console.log("redeem",`${process.env.VUE_APP_URL}/api/download/?code=${downloadCode.value}`)
  if (counter.value < 10){
    counter.value ++
    axios
    .get(`${process.env.VUE_APP_URL}/api/download/?code=${downloadCode.value}`)
    .then(response=>{
      console.log(response.data)
      window.location = response.data
      loading.value = false; 
    })
    .catch(e=>{
      loading.value = false; 
      error.value=e
      console.log(e)
    })

  } 
}

</script>

<template>
  <!-- <Test text="TestView" :link="require('@/assets/Texture_02.png')"/> -->
  <div class="h-screen w-screen flex flex-col items-center justify-center space-y-10" @keyup.enter="redeem()">
    <h2 class="font-thin text-center">Thank you for purchasing one of our Instruments!</h2>
    <div v-if="route.query.download_code">
      <h3 class="font-thin">Click here to redeem it:</h3>
    </div>
    <div v-else class="flex  flex-col space-y-4">
      <h3 class="font-thin">Please enter your download code:</h3> 
      <input v-model="downloadCode" type="text" placeholder="download code" class="text-black text-center text-3xl">
    </div>
    <div v-if="counter<10">
      <button :disabled="loading || downloadCode == ''" @click="redeem()" >Redeem</button>
    </div>
    <div v-else>
      <h3 class="text-red-500">You tried to often</h3>
    </div>
    <div v-if="error" class="">
      <h4 class="text-red-500" v-if="error.response.data=='downloadCode not Found'">Error: Your purchase could not be found</h4>
      <h4 v-else>An Error Occured</h4>
      <div class="flex flex-col items-center justify-center">
        <p>Please contact us if you are having trouble:</p>
        <a href="mailto:thomas@blecksaudio.de" class="text-lg">thomas@blecksaudio.de</a>
      </div>
   
    </div>
  </div>
  
</template>



<script>
import Test from "@/components/HeroPicFade.vue"
import Hamburger from "@/components/HamburgerCollapse.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: "TestView",
  components: {
    Hamburger,
    Test,
    Footer
  }
};

</script>