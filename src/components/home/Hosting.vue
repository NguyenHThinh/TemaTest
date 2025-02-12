<template>
  <div class="section_container home-hosting">
    <div class="relative">
      <NuxtImg src="/images/source-code-2.png" class="w-[620px] object-cover" />
      <NuxtImg
        src="/images/icon-park_caution.png"
        class="w-[100px] lg:w-[195px] object-cover absolute bottom-0 lg:top-1/2 lg:-translate-y-1/2 right-0 lg:translate-x-1/3"
      />
    </div>
    <div class="max-w-[450px] px-5">
      <h2 class="home-hosting__title">The language for building web pages</h2>
      <h3 class="home-hosting__desc">
        Go live on a fast, reliable, and hassle-free hosting network that scales
        with your business with one click and go code!
      </h3>
      <button class="home-hosting__try-btn">
        <p class="home-hosting__try-btn--text">Try it Yourself</p>
        <NuxtImg
          src="/images/Icon/akar-icons_arrow-up-right.png"
          class="object-cover w-[45px] aspect-square hidden lg:block"
        />
        <NuxtImg
          src="/images/Icon/akar-icons_arrow-right.png"
          class="object-cover w-[35px] aspect-square lg:hidden"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-hosting {
  @apply py-24 lg:p-24 flex flex-col-reverse lg:flex-row gap-5 items-center justify-between;

  .home-hosting__title {
    @apply font-bold text-5xl leading-[57.6px];
  }

  .home-hosting__desc {
    @apply font-[250] text-[22px] leading-[26.4px] tracking-[0%] py-10;
  }

  .home-hosting__try-btn {
    @apply cursor-pointer w-max py-4 px-7 gap-5 flex flex-row items-center rounded-[2px] bg-[#010101] text-white lg:hover:shadow-md lg:hover:bg-opacity-80 transition-all;

    .home-hosting__try-btn--text {
      @apply font-medium text-[22px] leading-[26.4px] tracking-[0%];
    }
  }
}

@media (max-width: 1024px) {
  .home-hosting {
    .home-hosting__title {
      @apply font-medium text-[34px] leading-[40.8px] tracking-[0.25px];
    }

    .home-hosting__desc {
      @apply font-extralight text-base leading-[22px] tracking-[0.1px];
    }

    .home-hosting__try-btn {
      @apply py-3 px-6;

      .home-hosting__try-btn--text {
        @apply text-[17px] leading-[20.4px] text-[#DDF247];
      }
    }
  }
}
</style>
