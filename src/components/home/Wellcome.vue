<template>
  <div class="section_container home-wellcome">
    <div class="flex-1 pl-4 pb-20 pt-[180px]">
      <h1 class="home-wellcome__title">
        Improve your skills by study <span></span> with coding
      </h1>
      <div class="mt-10 lg:mt-20">
        <NuxtImg src="/images/wave.png" class="object-cover" />
      </div>
      <h3 class="home-wellcome__description">
        Create, launch, and iterate on new marketing campaigns without
        distracting your product team.
      </h3>

      <button
        class="mt-20 cursor-pointer w-max py-4 px-7 gap-5 flex flex-row items-center rounded-[2px] bg-[#010101] text-white lg:hover:shadow-md lg:hover:bg-opacity-80 transition-all"
      >
        <p class="home-wellcome__get-start">Get started</p>
        <NuxtImg
          src="/images/Icon/akar-icons_arrow-up-right.png"
          class="object-cover w-[35px] lg:w-[45px] aspect-square textv"
        />
      </button>
    </div>
    <div
      class="lg:w-[600px] xl:w-[650px] min-[1440px]:w-[706px] h-[500px] lg:h-[905px] w-full relative home-wellcome__bg-img"
    >
      <NuxtImg
        src="/images/bg-header.png"
        loading="lazy"
        class="w-full h-full object-cover"
      />
      <NuxtImg
        src="/images/source-code.png"
        loading="lazy"
        class="absolute top-1/3 lg:top-[365px] lg:-left-[195px] w-[345px] h-[256px] lg:w-[610px] lg:h-[440px]"
      />
      <NuxtImg
        src="/images/people-1.png"
        loading="lazy"
        class="absolute bottom-0 right-0 lg:right-[50px] w-[273px] lg:w-[516px] h-[400px] lg:h-[752px]"
      />
      <NuxtImg
        src="/images/icon-park_caution.png"
        loading="lazy"
        class="absolute -bottom-[40px] lg:-bottom-[62px] -rotate-[30deg] lg:right-28 right-14 w-[105px] lg:w-[195px] aspect-square"
      />
      <div
        class="flex flex-row items-center gap-4 py-3 pr-[101px] pl-[35px] lg:py-6 lg:pl-[65px] lg:pr-[191px] bg-[#010101] bg-opacity-50 absolute left-0 bottom-0 backdrop-blur-[10px]"
      >
        <div
          class="border-[#FF4F4F] border-2 w-5 h-5 rounded-full flex items-center justify-center"
        >
          <div class="w-3 h-3 rounded-full bg-[#FF4F4F]"></div>
        </div>
        <p class="text-white home-wellcome__name">· Name (Skill)</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-wellcome {
  @apply flex flex-col lg:flex-row bg-[#f4f4f4];

  .home-wellcome__title {
    @apply max-w-[604px] font-medium text-6xl leading-[75.42px] tracking-[-0.5px];
    font-family: Source Code Pro;
  }
  .home-wellcome__description {
    @apply max-w-[375px] font-normal text-base leading-[20.11px] tracking-[0%];
    font-family: Source Code Pro;
  }
  .home-wellcome__get-start {
    @apply font-medium text-[22px] leading-[26.4px] tracking-[0%];
  }
  .home-wellcome__name {
    @apply font-[250] text-xl leading-6;
    font-family: Aeonik;
  }
}

@media (max-width: 1024px) {
  .home-wellcome {
    .home-wellcome__title {
      @apply max-w-[60%] font-normal text-[34px] leading-[40.8px] tracking-[0.25px];
      font-family: Aeonik;
    }
    .home-wellcome__description {
      @apply text-xs leading-[15.08px];
    }
    .home-wellcome__get-start {
      @apply text-[17px] leading-[20.4px];
    }
    .home-wellcome__name {
      @apply text-[10.6px] leading-[12.72px];
    }
  }
}
</style>
