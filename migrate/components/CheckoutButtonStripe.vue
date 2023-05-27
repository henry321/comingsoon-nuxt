<script setup>






</script>

<template>
  
  <div class="w-screen flex items-center justify-center">

    <div class="flex flex-col items-center justify-center space-y-4 w-[90%]">
  
  <h4>Please enter your data so we can send you your downloadcode</h4>
  <form v-on:submit.prevent="buy" class="flex flex-col space-y-4 text-white">
    <!-- <div :class="{ error: v$.form.firstName.$errors.length }">
      <input v-model="form.email" class="text-black">
      <div class="input-errors" v-for="error of v$.form.email.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div> -->
    <!-- <input v-model="form.firstName" placeholder="first name" type="text">
    <input v-model="form.lastName" placeholder="last name" type="text">
    <input v-model= "form.email" placeholder="email" type="text" class="text-black"> -->
    <input v-model="form.email" placeholder="email" class="text-center bg-zinc-700 focus:outline-none"
    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" required >
    <input v-model="form.firstName" placeholder="first name" class="text-center bg-zinc-700 focus:outline-none" required >
    <input v-model="form.lastName" placeholder="last name" class="text-center bg-zinc-700 focus:outline-none" required >
    <div class="flex flex-row items-center justify-center space-x-10 text-white">
      <label for="checkbox">Do you want to receive our newsletter?</label>
      <input type="checkbox" id="checkbox" checked v-model="receiveNewsletter" />
    </div>
    <div class="flex justify-center">

      <button
      :disabled='loading || store.numberProducts==0'
      class="w-32"
      type="submit"
      >
     Checkout
    </button>
    </div>
   


    


   
  </form>
  
</div>


  </div>
  
</template>

<script>
import { throwStatement } from '@babel/types';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios';
import {ref} from 'vue'; 
import {useProductStore} from "@/stores/productStore.js"

export default {
  name: 'CheckoutButtonStripe',
  props: {
    msg: String
  },
  setup(){
    const store = useProductStore();

    return { 
      v$: useVuelidate(),
      store
     }
  },
  data(){
    return{
      form:{
        email:ref(''),
        firstName:'',
        lastName:'',
      },
      receiveNewsletter: true,
      loading:false,
    }
  },
  validations(){
    return{
      form:{
        email: {required,email},
        firstName: {required},
        lastName: {required},
      }
     
    }
  },
  methods:{
    async buy(){
      if(this.store.total == 0){throw 'Basket Empty'}
      this.loading = true;
      axios
        .post(process.env.VUE_APP_URL+'/api/stripe/checkout',{
          firstName:this.form.firstName,
          lastName:this.form.lastName,
          email: this.form.email,
          receiveNewsletter:this.receiveNewsletter,
          shoppingBasket:this.store.basket.map((e)=>{
            return {product_id:e.id,quantity:e.qty}
          })
        },
        {'Content-Type' : 'application/json'})
        .then(response=>{
          window.location = response.data
          this.loading = false; 
        })
        .catch(e=>{
          this.loading = false; 
          console.log(e)
        })
    }
  }
}
</script>
