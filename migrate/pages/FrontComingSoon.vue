<template>
  
  <div class="bg-black w-screen text-white">
  
    <Hero />
    <Newsletter class="mt-10" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue"
import Newsletter from "@/components/Newsletter.vue"

export default {
  mounted(){
    document.body.classList.remove("overflow-hidden")
  },
  name: "HomeView",
  components: {
    HelloWorld,
    Newsletter,
    Hero
  }
};
</script>
