<script setup>
const runtimeConfig = useRuntimeConfig()
const counter = useState('counter')
</script>

<template>  
  <div>
    <p class="text-white"> Secret: {{ runtimeConfig }}</p>
    <p class="text-white">{{ counter }}</p>
  </div>
</template>