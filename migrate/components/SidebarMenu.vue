<script setup lang="ts">
import { shallowRef } from 'vue';
//nimport { RouterLink } from 'vue-router';
// import IconAngle from './icons/IconAngle.vue';
// import IconEmail from './icons/IconEmail.vue';
// import IconEmployeeGroup from './icons/IconEmployeeGroup.vue';
// import IconExclamation from './icons/IconExclamation.vue';
// import IconHome from './icons/IconHome.vue';
const isSidebarOpen = shallowRef<Boolean>(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <div class="wrapper">
    <aside :vue:is-open="isSidebarOpen">
      <ul class="sidebar-head">
        <li>
          <img src="@/assets/logo.png" alt="logo" width="32" height="32">
        </li>
        <li>
          <button class="sidebar-toggle" :class="isSidebarOpen ? 'toggle-button' : ''">
            <button @click=toggleSidebar></button>
          </button>
        </li>
      </ul>

      <h4 :transparent="!isSidebarOpen">Menu</h4>

      <ul>
        <li>
          <router-link to="/">
            <p>Home</p>
            <Transition name="fade">
              <span v-show="isSidebarOpen">Home</span>
            </Transition>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <p>Exclamation</p>
            <Transition name="fade">
              <span v-show="isSidebarOpen">About</span>
            </Transition>
          </router-link>
        </li>
        <li>
          <router-link to="/team">
            <p>Employee</p>
            <Transition name="fade">
              <span v-show="isSidebarOpen">Team</span>
            </Transition>
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            <p>Email</p>
            <Transition name="fade">
              <span v-show="isSidebarOpen">Contact</span>
            </Transition>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

