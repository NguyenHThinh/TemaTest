<script lang="ts" setup>
import type { IFeaturesSlide } from "~/types";
const {t} =useI18n();

const SLIDES_DATA: IFeaturesSlide[] = [
  {
    id: "_slide-1",
    icon: "/images/Icon/ic-feature-slide-1.png",
    title: t("flexible"),
    desc: t("connectMarketingTool"),
  },
  {
    id: "_slide-2",
    icon: "/images/Icon/ic-feature-slide-2.png",
    title: t("bestTutor"),
    desc: t("bringYourDesign"),
  },
  {
    id: "_slide-3",
    icon: "/images/Icon/ic-feature-slide-3.png",
    title: t("easyAccess"),
    desc: t("connectMarketingTool"),
  },
  {
    id: "_slide-2",
    icon: "/images/Icon/ic-feature-slide-2.png",
    title: t("bestTutor"),
    desc: t("bringYourDesign"),
  },
  {
    id: "_slide-3",
    icon: "/images/Icon/ic-feature-slide-3.png",
    title: t("easyAccess"),
    desc: t("connectMarketingTool"),
  }
];
</script>

<template>
  <div class="section_container home-features">
    <div class="col-span-8 lg:col-span-3 pl-4 lg:pl-[50px]">
      <h2 class="home-features__title">{{ t("ourFeaturesSpecial") }}</h2>
      <h3
        class="home-features__desc"
      >
      {{ t("weProvideSpecial") }}
      </h3>
    </div>
      <SliderFeatures
        :slider-data="SLIDES_DATA"
        class="col-span-8 mt-10 lg:mt-0 lg:col-span-5"
      />
  </div>
</template>

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
