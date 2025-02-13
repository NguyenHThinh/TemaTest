<script lang="ts" setup>
import type { IFeaturesSlide } from "~/types";
defineProps({
  sliderData: {
    type: Array as PropType<IFeaturesSlide[]>,
    required: true,
  },
});

// swiper setup
const featuresSlider = ref(null);

useSwiper(featuresSlider, {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    enabled: true,
    nextEl: ".nextbtn",
    prevEl: ".prevbtn",
  },
  slideActiveClass: "features-slider__slide-active",
  pagination: {
    el: ".features-pagination",
    clickable: true,
    bulletClass: "features-slider__pagination-button",
    bulletActiveClass: "features-slider__pagination-button--active",
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      centeredSlides: true,
      slidesPerView: 1.17,
    },
    1024: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
  },
});
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <swiper-container ref="featuresSlider" :init="false">
        <swiper-slide
          :class="['rounded-xl p-8 min-[1440px]:min-w-[317px] min-[1440px]:w-[317px] h-full bg-white']"
          v-for="(slide, index) in sliderData"
          :key="slide.id"
        >
          <div class="p-5 w-max rounded-lg bg-white">
            <NuxtImg :src="slide.icon" class="object-contain w-10 h-10" />
          </div>
          <div class="mt-20">
            <h3 class="font-bold text-[34px] leading-[40.8px] tracking-[0.25px]">
              {{ slide.title }}
            </h3>
            <p
              class="max-w-[160px] font-normal text-base leading-[22px] tracking-[0.1px]"
            >
              {{ slide.desc }}
            </p>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="features-pagination"></div>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide-next  {
  @apply lg:!bg-[#DDF247];
}

.features-slider__slide-active {
  @apply bg-[#DDF247] lg:bg-white;
}

.features-slider__pagination-button {
  @apply h-3 w-12 bg-[#CFCFCF] transition-all block;
}

.features-slider__pagination-button--active {
  @apply w-20 bg-[#DDF247] block;
}

.features-pagination {
  @apply flex flex-row justify-center items-center gap-2 mt-10 lg:absolute lg:-left-[54%] lg:bottom-4;
}
</style>
