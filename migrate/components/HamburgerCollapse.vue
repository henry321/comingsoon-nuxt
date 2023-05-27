<template>
    <!-- INHERITS BORDER COLOR! hover:border-zinc-200 works -->

    <div class="h-12 w-8 flex flex-col items-center justify-center"
    @click=transformMenu>
      <div class="h-0 w-2/3 border border-inherit border-t-3 rounded-t-xl rounded-b-xl transition-transform duration-250"
      :class="{ 'translate-y-1.5' :menuOpen&&finished}"
      ></div>
      <div class="h-0 w-2/3 border border-inherit border-t-3 rounded-t-xl rounded-b-xl my-1 transition-opacity duration-500"
      :class="{'opacity-0': menuOpen}"
      ></div>
      <div class="h-0 w-2/3 border border-inherit border-t-3 rounded-t-xl rounded-b-xl transition-transform duration-250"
      :class="{'-translate-y-1.5' :menuOpen&&finished}"></div>
    </div>
</template>

<script>
  export default {
  data() {
    return {
      menuOpen : false,
      finished: true
    };
  },
  methods: {
    transformMenu() {
      this.menuOpen = !this.menuOpen
      this.finished = false;
      setTimeout(()=>{
        this.finished = true;
      },100)
    },
  }
};
</script>
