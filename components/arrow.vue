@@ -0,0 +1,52 @@
<template>
  <!-- Add class 'open' to rotate into x.  -->
  <div class="">
    <button
      id="menu-btn"
      type="button"
      class="block arrow focus:outline-none" :class="{'open' : arrowdown}"
    >
      <span class="arrow-left"></span>
      <span class="arrow-right"></span>
    </button>
  </div>

</template>

<script setup>
const arrowdown = useState('arrowdown',()=>{return false})
</script>

<style>

.arrow{
  cursor:pointer;
  width:20px;
  height:14px;
  transition:all 0.25s;
  position:relative;
}

.arrow-left,
.arrow-right {
  position:absolute;
  width: 12px;
  height:2px;
  top: 5px;
  left: 0;
  background: #fff;
  transition: all 0.5s;
}

.arrow-left{
  transform:translateY(1px) rotate(45deg);
}
.arrow-right{
  transform:translateY(1px) translateX(7px) rotate(-45deg);
}
.open{
  transform: rotate(0deg)
}


</style>