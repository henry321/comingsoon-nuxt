<script setup>
  import {useProductStore} from "@/stores/productStore.js"
  const store = useProductStore();
  console.log(store.basket)
  async function addItemToCart(id,qty){
    store.addItem(id,1)
    //store.addItem(id, (qty ? qty:1))
  }
  async function addItemToCartForm(){
    store.addItem(itemName)
  }
  async function removeItemFromCart(id){
    store.removeItem(id)
  }

  
</script>
<template>


  <!-- SECTION FOR PRODUCTS -->
  <div class="w-screen flex items-center justify-center" v-motion-pop-visible>
    <h2>PRODUCTS</h2>
  </div>
  <div>
      <div v-for="product in store.products" >
        <router-link class="" to="/$">shop</router-link>

        <div class="flex flex-row">
          <img class="h-32 w-32" :src="product.image" alt="">
          <div class="flex flex-col justify-start place-items-end">
            <h3>{{product.name}}</h3>
            <h5>{{ product.price/100 }}.00 {{ product.currency }}</h5>
            <h5>{{ product.description }}</h5>
            <div class=" w-full flex items-center justify-end">
              <button @click="addItemToCart(product.id)">Buy</button>
            </div>
            
          </div>
          
        </div>

      
      </div>
    </div>
  
</template>

<script>

import BuyStripe from "@/components/CheckoutButtonStripe.vue"

export default {
  mounted(){
    document.body.classList.remove("overflow-hidden")
  },
  name: "Products",
  components: {
    BuyStripe
  },
};

</script>
