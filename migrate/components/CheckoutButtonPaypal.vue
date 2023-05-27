<template>
  <div>
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="buy">
      <button class="bg-zinc-700 px-4 py-1 rounded-xl hover:bg-zinc-300 hover:text-black font-bold" type ="buy">Buy via Paypal</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CheckoutButtonPaypal',
  props: {
    msg: String
  },
  methods:{
    async buy() {
      console.log("fetching");
      fetch('/api/paypal', {
        method: 'POST',
        redirect: 'follow'
      })
      .then(dataWrappedByPromise => dataWrappedByPromise.text())
      .then(data => {
        //Redirect is the URL inside the text of the response promise
        window.location.replace(data);
      })
    },
    async get(){
      fetch('/api/paypal',{
        method:'GET',
        redirect: 'follow'
      }).then(response => {
        const res1 = response; 
        console.log(res1)
        })
    }
  }
}
</script>


