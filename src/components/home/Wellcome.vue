<script lang="ts" setup></script>

<template>
  <div class="section_container home-wellcome">
    <div class="flex-1 pb-[82px] pt-[103px] pl-5 lg:pl-[50px] lg:pb-[107px] lg:pt-[173px]">
      <h1 class="home-wellcome__title">
        {{ $t("improveYourSkill") }}
      </h1>
      <div class="mt-10 lg:mt-[74px]">
        <NuxtImg src="/images/wave.png" class="w-[60px] h-[60px] lg:w-[75px] lg:h-[75px]" />
      </div>
      <h3 class="home-wellcome__description">
        {{ $t("createLaunch") }}
      </h3>

      <button
        class="mt-[22px] lg:mt-[111px] cursor-pointer w-max py-4 px-7 gap-5 flex flex-row items-center rounded-[2px] 
        bg-[#010101] text-white lg:hover:bg-opacity-80 lg:hover:text-[#DDF247] transition-all"
      >
        <p class="home-wellcome__get-start">{{ $t("getStarted") }}</p>
        <NuxtImg
          src="/images/Icon/akar-icons_arrow-up-right.png"
          class="object-cover w-[35px] lg:w-[45px] aspect-square textv"
        />
      </button>
    </div>
    <div
      class="min-[1080px]:w-[500px] xl:w-[650px] min-[1440px]:w-[706px] h-[500px] min-[1080px]:h-[905px] w-full relative home-wellcome__bg-img"
    >
      <NuxtImg
        src="/images/bg-header.png"
        loading="lazy"
        class="w-full h-full object-cover"
      />
      <NuxtImg
        src="/images/source-code.png"
        loading="lazy"
        class="absolute top-1/3 min-[1080px]:top-[365px] xl:-left-[195px] w-[345px] h-[256px] min-[1080px]:w-[610px] min-[1080px]:h-[440px]"
      />
      <NuxtImg
        src="/images/people-1.png"
        loading="lazy"
        class="absolute bottom-0 right-0 xl:right-[50px] w-[273px] min-[1080px]:w-[516px] h-[400px] min-[1080px]:h-[752px]"
      />
      <NuxtImg
        src="/images/icon-park_caution.png"
        loading="lazy"
        class="absolute -bottom-[40px] min-[1080px]:-bottom-[62px] -rotate-[30deg] min-[1080px]:right-28 right-14 w-[105px] min-[1080px]:w-[195px] aspect-square"
      />
      <div
        class="flex flex-row items-center gap-4 py-3 pr-[101px] pl-[35px] min-[1080px]:py-6 min-[1080px]:pl-[65px] min-[1080px]:pr-[191px] bg-[#010101] bg-opacity-50 absolute left-0 bottom-0 backdrop-blur-[10px]"
      >
        <div
          class="border-[#FF4F4F] border-2 w-5 h-5 min-[1080px]:w-8 min-[1080px]:h-8 rounded-full flex items-center justify-center"
        >
          <div class="w-3 h-3 min-[1080px]:w-6 min-[1080px]:h-6 rounded-full bg-[#FF4F4F]"></div>
        </div>
        <p class="text-white home-wellcome__name">{{ $t("nameSkill") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-wellcome {
  @apply flex flex-col min-[1080px]:flex-row bg-[#f4f4f4];

  &__title {
    @apply max-w-[604px] font-medium text-6xl leading-[75.42px] tracking-[-0.5px];
    font-family: Source Code Pro;
  }
  &__description {
    @apply max-w-[375px] font-normal text-base leading-[20.11px] tracking-[0%];
    font-family: Source Code Pro;
  }
  &__get-start {
    @apply font-medium text-[22px] leading-[26.4px] tracking-[0%];
  }
  &__name {
    @apply font-[250] text-xl leading-6;
    font-family: Aeonik;
  }
}

@media (max-width: 1024px) {
  .home-wellcome {
    &__title {
      @apply max-w-[60%] font-normal text-[34px] leading-[40.8px] tracking-[0.25px];
      font-family: Aeonik;
    }
    &__description {
      @apply text-xs leading-[15.08px];
    }
    &__get-start {
      @apply text-[17px] leading-[20.4px];
    }
    &__name {
      @apply text-[10.6px] leading-[12.72px];
    }
  }
}
</style>
