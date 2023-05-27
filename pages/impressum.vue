<template>
  <div class="min-h-full">
    <!--  Hero Section -->
    <!-- <HeroPic
      text="impressum."
      link="'https://blecksaudio.fra1.digitaloceanspaces.com/public-assets%2Fimages%2FTexture_02_SD_mIN.jpeg'"
    /> -->

    <div class="md:h-[20rem] h-[10rem] max-h-screen flex items-end justify-center">
      <message message="impressum"/>
    </div>


    <!--  Rest of Page -->
    <div class="md:min-h-[40rem] min-h-[30rem] flex items-start pt-20 justify-center">
      <div class="max-w-lg flex-row flex items-center justify-center h-28 space-x-2">
        <div class="w-1/2 text-right">
          <p class="text-sm">
            Lukas Blecks <br />Thomas Söllner <br />
            Voßstrasse 12 <br />30161 Hannover
          </p>
          <a href="mailto:lukas@blecksaudio.de" class=""
            >lukas@blecksaudio.de</a
          >
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
  </div>
</template>
