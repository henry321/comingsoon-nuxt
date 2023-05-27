<script setup>
import { useProductStore } from '~~/stores/productStore.js'
const store = useProductStore()
// const products = useState('products', () => store.fetchProducts())

const counter = useState('counter',()=>{return 1})
</script>
<template>  
  <div class="flex flex-col items-center justify-between space-y-10">
    <div class="flex flex-col space-y-10">
      <h2 class="text-center">PRODUCTS</h2>
      <div v-for="product in store.products" :key="product.id" class="flex flex-col">
        <p>{{ product.id }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.purpose }}</p>
        <button @click="store.addItem(product.id)">Add To Cart</button>
      </div>
    </div>
    <!-- <div v-if="store.numberProducts>0" class="flex flex-col space-y-10">
      <h2 class="text-center">CART</h2>
      <div v-for="item in store.basket" :key="item.id" class="flex flex-col">
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.qty }}</p>
        <p>{{ item.purpose }}</p>
        <button @click="store.removeItem(item.id)">Remove</button>
        <button @click="store.removeItemAll(item.id)">Remove All</button>


      </div>
      <div>
        total {{ store.total }}
      </div>
    </div>
   -->

  </div>
</template>
<style>

</style>