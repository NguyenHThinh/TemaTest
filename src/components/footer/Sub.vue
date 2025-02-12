<template>
  <div
    class="max-w-[1172px] h-[300px] lg:h-[410px] mx-auto rounded-[20px] bg-[#DDF247] p-[30px] lg:py-[52px] shadow-[0px_21px_127px_22px_#DDF2474D]"
  >
    <h2 class="title">
      Start upgrading your<br />
      skills free for this month
    </h2>
    <h3 class="desc mt-3">
      Build your site for free and take as long as you need
    </h3>
    <div
      class="mt-7 lg:mt-[38px] flex flex-col lg:flex-row justify-center items-center gap-4"
    >
      <button class="bg-[#01010140] min-h-8 lg:min-h-[75px] w-[236px] text-white text-center">
        Try Yourself
      </button>
      <button
        class="bg-black text-white min-h-8 lg:min-h-[75px] w-[236px] flex flex-row gap-5 items-center justify-center"
      >
        <p>Get started</p>
        <NuxtImg
          src="/images/Icon/akar-icons_arrow-up-right.png"
          class="object-cover w-5 lg:w-[45px] aspect-square"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.title {
  @apply font-extrabold text-[23px] leading-[28.91px] tracking-[-7%] text-center lg:text-[56px] lg:leading-[70.39px];
  font-family: Source Code Pro;
}
.desc {
  @apply max-w-[236px] lg:max-w-max mx-auto font-[250] text-sm lg:text-[34px] leading-[16.8px] lg:leading-[40.8px] tracking-[0.1px] lg:tracking-[0.25px] text-center;
}
button {
  @apply  font-medium text-[10px] lg:text-[22px] leading-3 lg:leading-[26.4px] tracking-[0%];
}
</style>
