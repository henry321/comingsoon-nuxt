<template>
  <div data-theme="black" class="overflow-y-hidden bg-black">
    <div class="w-screen fixed top-0 z-10" >
      <Header  />
    </div>
   

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="-translate-x-[30rem] opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="-translate-x-[30rem] opacity-0"
      >
      <DrawerMenu class="z-40" v-if="hamburgerOpen"/>
    </transition>
  
    
    <div class="min-h-screen" @click="headerLibSub=false">
      <!-- div to cover content -->
      <div class="fixed top-0 min-h-screen bg-white bg-opacity-10 backdrop-blur-sm w-screen z-20" 
      v-if="cartOpen || hamburgerOpen"
      :class="{}"
      @click="cartOpen = false; hamburgerOpen=false"></div>
      <NuxtPage class="" />
    </div>
    <div class="mx-10 max-w-2xl border-b md:mx-auto border-secondary my-10"></div>
    <Footer />

      
  </div>
</template>
<script setup>
const hamburgerOpen = useState('hamburgerOpen',()=>{return false})
const headerLibSub = useState('headerLibSub',()=>{return false})
const cardToastVisible = useState('cardToastVisible',()=>{return false})
const route = useRoute();

//const {x,y} =useScroll()

watch(route,()=>{
  hamburgerOpen.value=false
  cartOpen.value=false
  cardToastVisible.value = false
  headerLibSub.value = false
  
})


</script>



<style>



.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.page-enter-active {
  transition: all 0s;
}
.page-leave-active {
  transition: all 0s;
}
.page-enter-from {
  opacity: 0;
}
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}




</style>
