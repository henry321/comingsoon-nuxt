<template>
  <div class="min-h-screen flex flex-col pt-20 space-y-12 max-w-6xl mx-auto bg-black">
    <!-- Headings -->  
    <div class=" flex flex-col items-center">
        <div class="text-center flex flex-col space-y-0">
          <h5 class="font-thin italic">coming soon</h5>
          <div class="">
          <a class="inline" href="https://www.orchestraltools.com/competition/sixth-section">
            <h5 class=" font-thin inline"> The award winning Instrument</h5>
          </a>
          </div>
          
        </div>
        <div class="">
          <h1 class="font-bold text-7xl m-12 bg-gradient-to-b from-sky-300 via-sky-100 to-pink-200 text-transparent bg-clip-text">MOTION.</h1>
        </div>
        <div>
          <h5 class="inline">by </h5>
          <h5 class="font-semibold inline">blecksaudio.</h5>
        </div>
       
    </div>
    <!-- Video -->
    <div class="container max-w-5xl md:px-10 px-1 mx-auto  rounded-xl">
      <div class="bg-gradient-to-b from-sky-300 via-sky-100 to-pink-200  md:p-10 p-5 rounded-2xl flex items-center justify-center">
        <video controls class="w-full shadow-lg">
        <source src="https://blecksaudio.fra1.digitaloceanspaces.com/public-assets/Motion_DemoShort_3.0.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      </div>
      
    </div>
    <!-- Newsletter -->
    <div>
      <Newsletter />
    </div>
    <!-- Audio -->
  
    <!-- <div class="mx-auto mt-10 flex flex-col space-y-2">
      <audio controls class="accent-pink-200">
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio>
      <audio controls class="accent-pink-200">
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio>
    </div> -->
    <!-- Beschreibung -->
    <!-- <div class="container max-w-3xl p-10">
      <p class="font-normal">
        Motion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora sint pariatur distinctio rem ab vitae officia laboriosam numquam quasi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto placeat ducimus deserunt quasi reiciendis voluptatum dolores corrupti facere quidem!
      </p>
    </div> -->
    <!-- Zitate -->
    <div class="container max-w-5xl mx-auto p-24 space-y-10 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10">
     
      <div class="flex flex-col space-y-1 w-full lg:w-1/2">
        <p class="text-sm font-normal tracking-wider italic">"This instrument is simply incredible. The way how you combine all these instruments together gives us the options to blend and morph them between each other.
           Its fantastic. 
           For me as a sound designer it's all about the evolve of the sound."</p>
        <a href="https://robertdudzic.com/">
          <p class="text-sm text-left font-bold pl-3">Robert Dudzic</p>
        </a>
        
      </div>
      <div class="flex flex-col space-y-1 w-full lg:w-1/2">
        <p class="text-sm italic font-normal tracking-wider">"MOTION. is a fantastic instrument that wildly exceeded my expectations. 
          It has an amazing set of sounds that were easily manipulated. You could get lost exploring for hours on end."</p>
        <a href="https://de.wikipedia.org/wiki/Jacob_Shea">
          <p class=" text-sm font-bold text-left pl-3">Jacob Shea</p>

        </a>
      </div>
   
    </div>
    
  </div>
</template>
<script setup>
import { useProductStore } from "~~/stores/productStore.js";
const store = useProductStore();

const drawer_open = useState("drawer_open", () => {
  return false;
});
function toggleDrawer() {
  drawer_open.value = !drawer_open.value;
}
</script>
