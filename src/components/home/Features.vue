<template>
  <div class="section_container home-features">
    <div class="col-span-8 lg:col-span-3 pl-4 lg:pl-[50px]">
      <h2 class="home-features__title">Our Features Special For You</h2>
      <h3
        class="home-features__desc"
      >
        We provide various special features for all of you
      </h3>
      <div class="lg:flex flex-row gap-2 mt-24 hidden">
        <button
          :class="[
            'h-3 w-12 bg-[#CFCFCF] transition-all',
            { 'w-20 bg-[#DDF247]': index === currentSlide },
          ]"
          v-for="(slide, index) in SLIDES_DATA"
          :key="slide.id"
          @click="handleChangeSlide(index)"
        ></button>
      </div>
    </div>
    <div
      class="col-span-8 mt-10 justify-center lg:justify-normal lg:mt-0 lg:col-span-5 gap-4 lg:gap-8 grid grid-cols-[repeat(3,317px)] overflow-hidden"
    >
      <SliderFeatures
        :slider-data="SLIDES_DATA"
        :current-slide="currentSlide"
      />
    </div>
    <div class="col-span-8 flex flex-row gap-2 mt-20 lg:hidden mx-auto">
      <button
        :class="[
          'h-3 w-12 bg-[#CFCFCF] transition-all',
          { 'w-20 bg-[#DDF247]': index === currentSlide },
        ]"
        v-for="(slide, index) in SLIDES_DATA"
        :key="slide.id"
        @click="handleChangeSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IFeaturesSlide } from "~/types";

const SLIDES_DATA: IFeaturesSlide[] = [
  {
    id: "_slide-1",
    icon: "/images/Icon/ic-feature-slide-1.png",
    title: "Flexible",
    desc: "Connect your marketing tools with built-in integrations",
  },
  {
    id: "_slide-2",
    icon: "/images/Icon/ic-feature-slide-2.png",
    title: "Best Tutors",
    desc: "Bring your design vision to life in clean, semantic HTML5",
  },
  {
    id: "_slide-3",
    icon: "/images/Icon/ic-feature-slide-3.png",
    title: "Easy Access",
    desc: "Connect your marketing tools with built-in integrations",
  },
];

const currentSlide = ref(0);
let slideInterval: ReturnType<typeof setInterval> | null = null;

const handleChangeSlide = (index: number) => {
  currentSlide.value = index;
};

onMounted(() => {
  slideInterval = setInterval(() => {
    handleChangeSlide(
      currentSlide.value < SLIDES_DATA.length - 1 ? currentSlide.value + 1 : 0
    );
  }, 5000);
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>

<style lang="scss" scoped>
.home-features {
  @apply grid grid-cols-8 bg-[#f4f4f4] pt-32 pb-24;

  .home-features__title {
    @apply max-w-[345px] font-bold text-5xl leading-[57.6px];
  }

  .home-features__desc {
    @apply max-w-[256px] font-[250] text-[22px] leading-[26.4px] tracking-[0%] mt-10
  }
}

@media (max-width: 1024px) {
  .home-features {
    @apply pt-10 pb-24;

    .home-features__title {
      @apply font-medium text-[34px] leading-[40.8px] tracking-[0.25px];
    }

    .home-features__desc {
      @apply font-extralight text-base leading-[22px] tracking-[0.1px] mt-5;
    }
  }
}
</style>
