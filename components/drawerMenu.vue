<template>
  <div
    class="h-screen py-5 px-3 fixed top-0 flex flex-col items-center justify-between w-screen max-w-lg bg-primary overflow-y-auto"
    :class="{
      'right-0': orientation == 'right',
      'left-0': orientation != 'right',
    }"
  >
    <!-- Close and desciption -->
    <div class="flex w-full items-between justify-between">
      <div @click="hamburgerOpen = false">
        <close />
      </div>
      <h4>menu.</h4>
    </div>
    <!-- Menu -->
    <nav class="flex flex-col text-2xl text-left" id="mobilemenu">
      <MyLink class="mobilemenu" @click="hamburgerOpen = false" to="/" exact
        >home.</MyLink
      >
     
      <!-- <div class="transition-height duration-500 ease-in-out h-8 hover:h-20">
        Test
      </div> -->
  

     
     
      <MyLink class="mobilemenu" @click="hamburgerOpen = false" to="/about"
        >about.</MyLink
      >
    </nav>
    <div></div>
  </div>
</template>
<script setup>
const hamburgerOpen = useState("hamburgerOpen", () => {
  return false;
});
const cartOpen = useState("cartOpen", () => {
  return true;
});
const showlib = ref(false);
// function close(){
//   hamburgerOpen.value= false;
//   cartOpen.value=false;
// }
</script>
<script>
export default {
  props: ["orientation"],
};
</script>

<style>
.mobilemenu{
  @apply m-2
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
