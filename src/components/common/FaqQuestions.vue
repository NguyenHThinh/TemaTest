<template>
  <div class="faq-box">
    <div class="faq-box__content">
      <h3 class="faq-box__content--question">
        {{ question }}
      </h3>
      <p
        class="faq-box__content--answer"
        :class="isActiveAnswer ? 'block' : 'hidden'"
      >
        {{ answer }}
      </p>
    </div>
    <button
      :class="[
        'faq-box__controler-btn',
        isActiveAnswer
          ? 'bg-[#DDF247] border-[#DDF247]'
          : 'text-[#DDF247] border-black',
      ]"
      @click="handChangeActiveAnswer"
    >
      <p>{{ isActiveAnswer ? "-" : "+" }}</p>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const isActiveAnswer = ref(props.isActive);

const handChangeActiveAnswer = () => {
  isActiveAnswer.value = !isActiveAnswer.value;
};
</script>

<style lang="scss" scoped>
.faq-box {
  @apply flex flex-row justify-between items-center;

  .faq-box__content {
    @apply max-w-[782px] px-0 py-10;

    .faq-box__content--question {
      @apply font-medium text-[21px] leading-[25.2px] tracking-[0.22px] 
      lg:font-bold lg:text-[34px] lg:leading-[40.8px] lg:tracking-[0.25px];
    }

    .faq-box__content--answer {
      @apply font-[250] text-[19px] leading-[22.8px] tracking-[0%] 
      lg:font-normal lg:text-base lg:leading-[22px] lg:tracking-[0.1px] lg:mt-14 mt-4;
    }
  }
  .faq-box__controler-btn {
    @apply flex justify-center items-center border-2 border-solid rounded-full font-medium 
    w-8 h-8 lg:w-[62px] lg:h-[62px] min-w-8
    lg:text-[47.41px] lg:tracking-[0.3px] text-[24.47px] leading-[29.36px] tracking-[0.16px];
  }
}
</style>
