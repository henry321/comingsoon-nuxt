<template>
  <div
    class="h-screen py-5 px-3 fixed top-0  w-screen max-w-lg bg-primary overflow-y-auto"
    :class="{
      'right-0': orientation == 'right',
      'left-0': orientation != 'right',
    }"
  >
    <!-- Content -->
    <div class="w-full flex md:h-full h-screen-90 flex-col items-start justify-between">
      <!-- TOP ITEM -->
      <div class="w-full">
        <div class="flex w-full items-between justify-between md:pr-5">
          <h4>cart.</h4>
          <div @click="cartOpen = false" class="">
            <close />
          </div>
        </div>
        <!-- Items -->
        <div class="w-full mt-20" v-if="store.numberProducts > 0">
          <div
            v-for="item in store.basket"
            :key="item.id"
            class="m-2 relative flex justify-between"
          >
            <div class="flex flex-row items-center space-x-2">
              <img class="h-24 w-24" :src="item.image" alt="" />
              <div class="flex flex-col justify-start space-y-1">
                <h3>{{ item.name }}</h3>
                <div>
                  <p>
                    {{ item.qty }} x €{{ item.price / 100 }}.00
                   
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-center space-y-3">
              <div
                class="pr-0.5 hover:cursor-pointer scale-75"
                @click="store.removeItemAll(item.id)"
              >
                <close  />
              </div>
              <div
                class="pr-[5px] hover:cursor-pointer"
                @click="store.removeItem(item.id)"
              >
                <h3 class="font-semibold text-right">-</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Item -->

      <div v-if="store.numberProducts > 0" class="w-full">
        <div class="border-t border-b py-3">
          <!-- Subtotal -->
          <div class="flex justify-between">
            <h5>Subtotal</h5>
            <h4>€{{ store.total }}.00</h4>
          </div>
          <!-- accept terms -->
          <div class="flex items-center space-x-2">
            <input type="checkbox" checked v-model="acceptTerms" />
            <h6 class="text-base">I agree with the</h6>
            <nuxt-link
              to="/terms"
              @click="cartOpen = false"
              class="text-base border-b"
              >terms and conditions</nuxt-link
            >
          </div>
        </div>
        <div class="flex justify-center mt-6 md:mb-10 mb-16 space-x-4">
          <button class="btn" :disabled="!acceptTerms" @click="cartOpen=false;navigateTo('/cart')">go to cart.</button>
          <button class="btn" :disabled="!acceptTerms" @click="cartOpen=false;navigateTo('/checkout')">checkout.</button>

        </div>
      </div>
      <div
      v-if="!store.numberProducts > 0"
        class="flex text-center flex-col justify-center mx-auto space-y-5"
      >
        <h3>your cart is empty.</h3>
        <button class="btn" @click="cartOpen=false;navigateTo('/shop')">let's fix that</button>
      </div>
      <div
        v-if="!store.numberProducts > 0"
        class=""
      >
      </div>
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from "~~/stores/productStore.js";
const store = useProductStore();
const hamburgerOpen = useState("hamburgerOpen", () => {
  return false;
});
const acceptTerms = useState("acceptTerms", () => {
  return true;
});

const cartOpen = useState("cartOpen", () => {
  return true;
});
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
