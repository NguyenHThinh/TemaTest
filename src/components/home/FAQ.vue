<script lang="ts" setup>
import type { IFaQData } from "~/types";
const {t} = useI18n();

const FAQ_DATA: IFaQData[] = [
  {
    id: "_faq-1",
    question: t("findInfomation"),
    answer: t("answer")
  },
  {
    id: "_faq-2",
    question: t("shareDemoIdeas"),
    answer: t("answer")
  },
  {
    id: "_faq-3",
    question: t("getInsightsUser"),
    answer: t("answer")
  },
  {
    id: "_faq-4",
    question: t("devWithoutCode"),
    answer: t("answer")
  },
];
</script>

<template>
  <div class="section_container p-5 lg:py-20 lg:px-[50px]">
    <h2 class="home-faq__title">{{ t("QA") }}</h2>
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

<style lang="scss" scoped>
.home-faq__title {
  @apply font-bold text-[34px] lg:text-5xl leading-[40.8px] lg:leading-[57.6px] tracking-[0.25px] lg:tracking-[0%] text-center;
}
</style>
