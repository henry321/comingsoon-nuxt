<template>
    <!-- Add class 'open' to rotate into x.  -->

  <div class="">
    <button
      id="menu-btn"
      type="button"
      class=" block hamburger focus:outline-none" :class="{'' : hamburgerOpen}" @click="hamburgerOpen = !hamburgerOpen"
    >
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </button>
  </div>

</template>

<script setup>
const hamburgerOpen = useState('hamburgerOpen',()=>{return false})
</script>

<style>

.hamburger{
  cursor:pointer;
  width:24px;
  height:24px;
  transition:all 0.25s;
  position:relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position:absolute;
  width: 24px;
  height:2px;
  top: 5px;
  left: 0;
  background: #fff;
  transform:rotate(0);
  transition: all 0.5s;
}

.hamburger-middle{
  transform:translateY(6px);
}
.hamburger-bottom{
  transform:translateY(12px);
}

.open{
  transform:rotate(90deg);
}
.open .hamburger-top{
  transform: rotate(45deg) translateY(5px) translateX(5px);
}

.open .hamburger-middle{
  display:none;  
}

.open .hamburger-bottom{
  transform: rotate(-45deg) translateY(5px) translateX(-5px);
}

</style>