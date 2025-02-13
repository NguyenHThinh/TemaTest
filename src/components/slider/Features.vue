<template>
  <div
    :class="[
      'rounded-xl p-8 min-w-[317px] select-none cursor-pointer',
      currentSlide === index ? 'bg-[#DDF247]' : 'bg-white',
      { 'order-1': currentSlide === index },
      { 'order-0': nextSlide === index },
      { 'order-2': prevSlide === index },
    ]"
    v-for="(slide, index) in sliderData"
    :key="slide.id"
    @mousedown="handleChangeSlide(index)"
    @touchend="handleChangeSlide(index)"
  >
    <div class="p-5 w-max rounded-lg bg-white">
      <NuxtImg :src="slide.icon" class="object-contain w-10 h-10" />
    </div>
    <div class="mt-20">
      <h3 class="font-bold text-[34px] leading-[40.8px] tracking-[0.25px]">{{ slide.title }}</h3>
      <p class="max-w-[160px] font-normal text-base leading-[22px] tracking-[0.1px]">{{ slide.desc }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IFeaturesSlide } from "~/types";
const props = defineProps({
  sliderData: {
    type: Array as PropType<IFeaturesSlide[]>,
    required: true,
  },
  currentSlide: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:currentSlide"]);

const nextSlide = computed(() => {
  const nextSlide =
    props.currentSlide < props.sliderData.length - 1
      ? props.currentSlide + 1
      : 0;
  return nextSlide;
});
const prevSlide = computed(() => {
  const prevSlide =
    props.currentSlide === 0
      ? props.sliderData.length - 1
      : props.currentSlide - 1;
  return prevSlide;
});

const handleChangeSlide = (index: number) => {
  emit("update:currentSlide", index);
}
</script>
