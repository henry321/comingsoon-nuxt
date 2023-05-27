<template>
  <HeroPic text="impressum." :link="require('@/assets/Texture_011_SD.jpg')" />
  <div class="w-full flex items-center justify-center h-96">
    <div
      class="w-[90%] max-w-lg flex-row flex items-center justify-center h-28 space-x-2"
    >
      <div class="w-1/2 text-right">
        <p class="text-sm">
          Lukas Blecks <br />Thomas Söllner <br />
          Voßstrasse 12 <br />30161 Hannover
        </p>
        <a href="mailto:lukas@blecksaudio.de" class="">lukas@blecksaudio.de</a>
      </div>
      <div class="h-full border border-zinc-600 rounded-3xl"></div>
      <div class="w-1/2">
        <p class="text-left text-xs text-zinc-400">
          Plattform der EU-Kommission zur Online-Streitbeilegung:
          https://ec.europa.eu/consumers/odr <br />Ich bin zur Teilnahme an
          einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeroPic from "@/components/HeroPic.vue";
export default {
  mounted() {
    document.body.classList.remove("overflow-hidden");
  },
  name: "HomeView",
  components: {
    Header,
    HeroPic,
  },
};
</script>
<style scoped></style>
