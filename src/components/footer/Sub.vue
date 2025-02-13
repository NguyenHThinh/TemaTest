<script lang="ts" setup></script>

<template>
  <div class="footer__sub">
    <h2 class="footer__sub--title">
      {{ $t("startUpgranding") }}<br />
      {{ $t("skillFreeThisMonth") }}
    </h2>
    <h3 class="footer__sub--desc">
      {{ $t("buildSiteFree") }}
    </h3>
    <div
      class="mt-7 lg:mt-[38px] flex flex-col lg:flex-row justify-center items-center gap-4"
    >
      <button
        class="bg-[#010101] bg-opacity-30 text-center lg:hover:bg-opacity-100 lg:hover:!text-[#DDF247]"
      >
        {{ $t("tryYourself") }}
      </button>
      <button
        class="bg-black flex flex-row gap-5 items-center justify-center lg:hover:bg-opacity-100 lg:hover:bg-[#01010140]"
      >
        <p>{{ $t("getStarted") }}</p>
        <NuxtImg
          src="/images/Icon/akar-icons_arrow-up-right.png"
          class="object-cover w-5 lg:w-[45px] aspect-square"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__sub {
  @apply max-w-[1172px] h-[300px] lg:h-[410px] mx-auto rounded-[20px] bg-[#DDF247] p-[24px] lg:py-[52px] shadow-[0px_21px_127px_22px_#DDF2474D];

  &--title {
    @apply font-extrabold text-[22px] leading-[28.91px] tracking-[-0.5px] text-center lg:text-[52px] lg:leading-[70.39px];
    font-family: Source Code Pro;
  }
  &--desc {
    @apply max-w-[236px] mt-3 lg:max-w-max mx-auto font-[250] text-sm lg:text-[34px] leading-[16.8px] lg:leading-[40.8px] tracking-[0.1px] lg:tracking-[0.25px] text-center;
  }
  button {
    @apply min-h-8 lg:min-h-[75px] w-[236px] font-medium text-white text-[10px] lg:text-[22px] leading-3 lg:leading-[26.4px] tracking-[0%] transition-all;
  }
}
</style>
