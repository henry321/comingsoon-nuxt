<template>
  <div class="w-full md:h-screen h-screen-90 overflow-hidden relative">
    <!-- HEADER CONTAINER -->

    <!-- CONTENT -->

    <div
      id="zentral"
      class="h-full flex items-center justify-center space-y-24 flex-col relative z-20"
    >
      <!-- MAIN CONTENT -->
      <div class="flex flex-col items-center space-y-8" 
      >
        <h2 class="tracking-widest"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, scale: 1 ,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 25,
            mass: 1,
          },}"
          :variants="{ custom: { scale: 2 } }"
          :delay="0"
          
        >blecksaudio.</h2>
        <div class="flex flex-col items-center justify-center space-y-2"
      
        >
          <div   v-motion
        :initial="{ opacity: 0, y:20  }"
        :enter="{ opacity: 1, y: 0, scale: 1 ,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 25,
            mass: 1,
          },}"
        :variants="{ custom: { scale: 2 } }"
        :delay="400">
            <p class="text-thin text-3xl">We build virtual instruments</p>

          </div>
          <div   v-motion
        :initial="{ opacity: 0, y:20  }"
        :enter="{ opacity: 1, y: 0, scale: 1 ,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 25,
            mass: 1,
          },}"
        :variants="{ custom: { scale: 2 } }"
        :delay="800">
            <p class="text-center text-thin text-3xl">for music producers, composers & filmmakers.</p>

          </div>
        </div>
        
      </div>
    
          <!-- LOADING SVG -->
        
      

      <!-- <div class="">
        <Newsletter />
      </div> -->
    </div>
    <!-- VIDEO CONTENT OUT OF FLOW -->
    <video
      id="video"
      @loadeddata="videoLoaded"
      loop
      class="z-0 min-h-full min-w-full h-full object-cover absolute top-0"
      :src="link"
      type="video/mp4"
      :muted="mute"
      playsinline
      autoplay
    ></video>
    <!-- BUTTONS FOR VIDEO -->
    
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Newsletter from "@/components/Newsletter.vue";
export default {
  data() {
    return {
      loading: true,
      mute: true,
      videoEnded: false,
      main: false,
      sub: false,
      coming: false,
      contentShowing: false,
    };
  },
  mounted() {
  },
  props: {
    link:String,
  },
  name: "Hero",
  components: {
    Header,
    Newsletter,
  },
};
</script>
