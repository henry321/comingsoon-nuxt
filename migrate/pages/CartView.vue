<template>
  <div class="h-10"></div>
  <Cart />
  <Products />
</template>

<script>
// @ is an alias to /src
import {useProductStore} from "@/stores/productStore.js"

import Cart from "@/components/Cart.vue";
import Products from "@/components/Products.vue";


export default {
  setup(){
    const store = useProductStore();
    let itemName = ''
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
    return{
      store,
      itemName,
      addItemToCart,
      addItemToCartForm,
      removeItemFromCart
    }
  },
  mounted(){
    document.body.classList.remove("overflow-hidden")
  },
  name: "HomeView",
  components: {
    Cart,
    Products
  },
  
  
};

</script>
