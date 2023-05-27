<script setup>
  import {useProductStore} from "@/stores/productStore.js"
    const store = useProductStore();
    const itemName = ref('')
    console.log(store.basket)
    async function addItemToCart(id){
      console.log("BUTTON WORKS",id)
      store.addItem(id,1)
      
    }
    async function addItemToCartForm(){
      store.addItem(itemName)
    }
    async function removeItemFromCart(id){
      store.removeItem(id)
    }
 

</script>

<template>

  <div class="bg-black w-screen max-w-lg h-full text-white flex flex-col items-center justify-between">
  <!-- SECTION FOR CART -->
  <div v-for="item in store.basket" class="m-2 w-full" >
      <div class="flex flex-row items-center space-x-2">
        <img class="h-24 w-24" :src="item.image" alt="">
        <div class="flex flex-col justify-start space-y-1">
          <h3>{{item.name}}</h3>
          <div>
            <p>{{ item.qty }} x  {{ item.price/100 }}.00 {{ item.currency }}</p>
          </div>
        </div>
      </div>
    </div>
  <div class="w-full">
    <!-- TOTAL OF CART -->
    <div class="flex w-full space-x-10 border-t">
      <h2>Total</h2>
      <h3>{{ store.total }}.00</h3>
    </div>
  </div>
    
    <!-- <Hero />
    <Newsletter class="mt-10" /> -->

  
  </div>
</template>


</script>
