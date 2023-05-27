<template>
  <div>
    <label for="my-modal" class="btn">open modal</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" v-model="loadingStripe"/>
    <div class="modal">
      <div class="modal-box flex flex-col items-center">
        <h3 class="font-bold text-lg">Redirecting to Stripe...</h3>
        <p class="py-4">
         <div class="btn loading"></div>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const loadingStripe = useState('loadingStripe',()=>{return false})

</script>
