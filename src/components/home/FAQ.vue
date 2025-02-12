<template>
  <div class="section_container p-5 lg:py-20 lg:px-[50px]">
    <h2 class="home-faq__title">FAQs</h2>
    <div class="divide-y-2 divide-[#E4E4E4] mt-8">
      <CommonFaqQuestions
        v-for="(item, index) in FAQ_DATA"
        :key="item.id"
        :question="item.question"
        :answer="item.answer"
        :is-active="index === 0"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IFaQData } from "~/types";

const FAQ_DATA: IFaQData[] = [
  {
    id: "_faq-1",
    question: "01. Can I Find the right information faster?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
  },
  {
    id: "_faq-2",
    question: "02. How to share feature demos and ideas?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
  },
  {
    id: "_faq-3",
    question: "03. How to get insights from users?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
  },
  {
    id: "_faq-4",
    question: "04. Can I develop my website without code?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
  },
];
</script>

<style scoped>
.home-faq__title {
  @apply font-bold text-[34px] lg:text-5xl leading-[40.8px] lg:leading-[57.6px] tracking-[0.25px] lg:tracking-[0%] text-center;
}
</style>
