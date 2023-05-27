<template>
  <div class="navbar bg-base-100 fixed z-10">
    <div class="md:flex-none inline-block md:hidden">
      <button class="btn btn-square btn-ghost" @click="toggleDrawer()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl font-thin">blecksaudio.</a>
    </div>
    <div class="md:flex-none hidden md:inline-block">
      <ul class="menu menu-horizontal px-1">
        <li> <NuxtLink to="/">Home</NuxtLink> </li>
        <li tabindex="0">
          <a>
            Libraries
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><NuxtLink to="/distinction">Distinction</NuxtLink></li>
            <li><NuxtLink to="/addiction">Addiction</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">{{ store.numberProducts }}</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">{{ store.numberProducts }} Items</span>
            <span class="text-info">Subtotal: €{{ store.total }}.00</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block" @click="navigateTo('/cart')">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { useProductStore } from '~/stores/productStore.js'
const store = useProductStore() 

const drawer_open = useState('drawer_open',()=>{return false})
function toggleDrawer(){
  drawer_open.value = !drawer_open.value
}
</script>