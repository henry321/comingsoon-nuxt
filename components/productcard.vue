<template >
  <div class="flex items-center justify-center">
    <div class="flex flex-col items-center space-y-4 backdrop-blur bg-transparent rounded-xl p-5 m-3
      md:flex-row md:space-x-6 md:space-y-0">
        <!-- Image -->
        <div class="md:w-1/2 shadow-4xl">
          <img src="https://blecksaudio.fra1.digitaloceanspaces.com/public-assets/Distinction/library.png" alt=""
          class="max-w-lg w-full mx-auto hover:scale-105 transition-all duration-250 rounded-xl">
        </div>
        <!-- Content -->
        <div class="flex flex-col space-y-6 max-w-md">
          <div class="text-5xl font-extralight text-center md:text-center">Addiction</div>
          <div class="text-3xl font-light text-center md:text-center">Addictive. Handle with Care </div>
          <div class="text-center md:text-center">Your new favourite Synthesizer Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, a.</div>
          <!-- Price -->
          <div class="text-center md:text-center">
            <p class="line-through text-sm">€199</p>
            <p class="font-bold text-4xl">€149</p>
          </div>
          <!-- Buttons -->
          <div class="flex flex-col justify-center space-y-3 space-x-0
          md:flex-row md:justify-center md:space-x-3 md:space-y-0">
            <button class=" bg-opacity-50 hover:bg-opacity-100 p-2 px-8 rounded-md ">Add to Cart</button>
            <button class=" bg-opacity-50 hover:bg-opacity-100 p-2 px-8 rounded-md ">Learn More</button>
          </div>
        </div>
      </div>

  </div>
     
</template>
