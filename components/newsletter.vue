<template>
  <div id="newsletter"
      class=" text-white flex justify-center items-center flex-col transition-all duration-500 scale-100 opacity-100">
      <div class="mx-2 md:text-xl text-center "></div>
      <div class="m-4">
        <form id="sib-form" method="POST" class="flex flex-row space-x-2"
          action="https://d695d4f6.sibforms.com/serve/MUIEAAdH7lvDxqomww_rCKYc00J__ooAPfj65ChdDCsCfixzXiTQntlqQOsARI0hNRVyf3dpjbewgpedboCPY20dnm1SnCN_M56W5kWuNcyvwFbdSETAuvezQ9OP3i_LbXUH8AUwiTbp8uzsIkUCmMp1Wp4j50uAlc7O4fVvH_sQU_1ooD9AzVTfAFQIzw1wX36Fhe70JDrb2pmX">
          <input class="w-64 input bg-zinc-800 text-pink-white px-2 py-1 text-sm text-center focus:outline-none"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" type="text" id="EMAIL" name="EMAIL"
            autocomplete="off" placeholder="email" data-required="true" required />
          <button class="bg-pink-200 hover:bg-pink-100 text-black 
            rounded-2xl px-4 py-2 
            md:text-sm text-xs font-semibold tracking-wider" form="sib-form" type="submit">
            keep me updated
          </button>
        </form>
      </div>
    </div>
    
</template>