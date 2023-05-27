<template>
    <div class="flex justify-center items-center h-4/6 text-center flex-col">
      <h2 v-if="message" class="">{{message}}</h2>
      <h3 v-if="submessage" class="mt-4">{{submessage}}</h3>
    </div>
</template>

<script>
export default{
  props: ['message','submessage']
}
</script>