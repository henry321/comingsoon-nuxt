@@ -0,0 +1,65 @@
<template>
  <!-- Add class 'open' to rotate into x.  -->
  <div class="inline-block">
    <button
      id="menu-btn"
      type="button"
      class="flex items-center justify-center close focus:outline-none open"
    >
      <span class="close-top"></span>
      <span class="close-bottom"></span>
    </button>
  </div>

</template>

<script setup>
</script>

<style>

.close{
  cursor:pointer;
  width:20px;
  height:20px;
  transition:all 0.25s;
  position:relative;
}

.close-top,
.close-middle,
.close-bottom {
  position:absolute;
  width: 20px;
  height:2px;
  top: 5px;
  left: 0;
  background: #fff;
  transform:rotate(0);

}

.close-top{
  transform:translateY(4px);
}
.close-bottom{
  transform:translateY(4px);
}

.open .close-top{
  transform: rotate(45deg) translateY(3px) translateX(3px);
}



.open .close-bottom{
  transform: rotate(-45deg) translateY(3px) translateX(-3px);
}

</style>