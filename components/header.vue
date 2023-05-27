<template>
  <div
    class="max-w-6xl mx-auto group flex flex-row justify-between items-center p-3 px-3 md:px-8 z-10 relative h-[60px] transition-all duration-250 hover:bg-primary"
    :class="{
      'bg-primary bg-opacity-90': scrollPosition > 50,
      'bg-transparent': scrollPosition <= 50,
    }"
  >
    <div class="md:hidden">
      <Hamburger class="" />
    </div>
    <MyLink to="/">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex md:top-0 md:-left-5 md:-translate-x-0 md:-translate-y-0 md:relative"
      >
        <img src="@/assets/img/LOGO_22112802.png" class="h-[32px]" alt="Logo" />
      </div>
    </MyLink>
    <transition
      enter-active-class="duration-300 transition-all ease-out origin-top"
      enter-from-class="opacity-0 scale-y-0 "
      enter-to-class="opacity-100 scale-y-100"
      leave-active-class="duration-300 transition-all origin-top"
      leave-from-class="opacity-100 scale-y-100"
      leave-to-class="opacity-0 scale-y-0"
    >
      <div
        class="absolute w-60 h-40 right-0 flex text-center p-1 flex-col items-center justify-center border-secondary shadow-lg bg-primary bg-opacity-90 top-[60px] space-y-1 transition-all duration-250"
        v-if="cardToastVisible"
      >
        <h6>Your cart has been updated.</h6>
        <h6>total: €{{ store.total }}.00</h6>
        <button
          class="important! btn btn"
          @click="
            cartOpen = true;
            cardToastVisible = false;
          "
        >
          go to cart.
        </button>
      </div>
    </transition>

    <!-- Container Basket and Links -->
    <div class="flex space-x-6">
      <div class="hidden md:flex space-x-4 font-thin">
        <MyLink @click="headerLibSub = false" to="/">home.</MyLink>

      

        <MyLink @click="headerLibSub = false" to="/about">about.</MyLink>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useProductStore } from "@/stores/productStore.js";
const store = useProductStore();
const route = useRoute();
const cardToastVisible = useState("cardToastVisible", () => {
  return false;
});

watch(store.basket, (current, old) => {
  console.log("watcher");
  console.log("route", route.path);

  if (route.path != "/checkout" && route.path != "/cart" && !cartOpen.value) {
    cardToastVisible.value = true;
    setTimeout(() => {
      cardToastVisible.value = false;
    }, 5000);
  }
});
const headerLibSub = useState("headerLibSub", () => {
  return false;
});

const hamburgerOpen = useState("hamburgerOpen", () => {
  return false;
});
const cartOpen = useState("cartOpen", () => {
  return false;
});
const scrollPosition = ref(0);

// const el = ref<HTMLElement | null>(null)

function closeHeaderLibSub() {
  if (headerLibSub.value == true) headerLibSub.value = false;
}
function overflow() {
  let attr = hamburgerOpen.value || cartOpen.value ? "overflow-hidden" : "";
  console.log("overflow", attr);

  useHead({
    bodyAttrs: {
      class: attr,
    },
  });
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });
  function toggleOverflow() {
    document.querySelector("body").classList.toggle("overflow-hidden");
  }
  watch(hamburgerOpen, (curr, old) => toggleOverflow());
  watch(cartOpen, (curr, old) => toggleOverflow());
});
</script>

<script></script>
