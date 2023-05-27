<script setup>
  import {useProductStore} from "@/stores/productStore.js"
  const store = useProductStore();
  store.emptyBasket();
</script>
<template>
  <div class="bg-black h-screen w-screen">
    <div class="flex justify-center items-center h-4/6 text-center flex-col">
      <h3 class="">{{message}}</h3>
      <h4 class="mt-4">{{submessage}}</h4>
    </div>
  </div>
</template>

<script>
export default {

  name: "MessageView",
  props:{
    message:String,
    submessage: String
  },
  components: {
  }
};

</script>
