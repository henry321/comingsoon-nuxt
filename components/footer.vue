<template>
  <div class="flex flex-col space-y-8 pb-24">
    <div class="flex flex-col items-center justify-center">
      <h4 class="font-light">blecksaudio.</h4>
    </div>
    <!-- Links -->
    <div class="flex space-y-2 flex-col">
      <!-- sitemap -->
      <div
        class="flex flex-row space-x-4 items-center justify-center w-screen max-w-xl flex-wrap px-2 mx-auto"
      >
        <MyLink class="footermenu" to="/">home</MyLink>
        <MyLink class="footermenu" to="/about">about</MyLink>
      </div>
      <div
        class="flex flex-row space-x-4 items-center justify-center w-screen max-w-xl flex-wrap px-2 mx-auto"
      >
       
        <MyLink class="footermenu" to="/impressum">impressum</MyLink>
      </div>
    </div>
    <!-- Social Buttons -->
    <div
      class="flex flex-row w-full max-w-xl items-center justify-center space-x-8 mx-auto"
    >
      <a href="https://www.instagram.com/blecksaudio/" class="hover:fill-white">
        <svg
          class="fill-primarytext"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill=""
        >
          <path
            d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"
          />
        </svg>
      </a>
 
      <a href="mailto:thomas@blecksaudio.de">
        <svg
          class="stroke-primarytext"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill=""
          stroke=""
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          ></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
    </div>
    <!-- Links -->
   

    

    <div class="">
      
      <img
        src="@/assets/img/LOGO_22112802.png"
        class="h-[24px] w-[24px] mx-auto hover:cursor-pointer"
        alt="Logo"
        @click="navigateTo('/')"
      />
    </div>
    <div>
      <h6 class="text-secondarytext text-center">
        &copy 2023 blecksaudio. All Rights Reserved
      </h6>
    </div>
  </div>
</template>
