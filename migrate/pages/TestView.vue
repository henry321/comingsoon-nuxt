<template>
  <Test text="TestView" :link="require('@/assets/Texture_02.png')"/>
  <div class="h-screen w-screen"></div>
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