<script lang="ts" setup></script>

<template>
  <div class="section_container relative p-5 lg:px-[50px] lg:pb-20 pt-[250px] bg-black">
    <div class="absolute top-0 lg:left-14 lg:right-14 left-[30px] right-[30px] -translate-y-[100px] lg:-translate-y-[225px]">
      <FooterSub />
    </div>
    <div class="lg:px-20 py-[30px] flex flex-col gap-[61px] lg:gap-0 lg:flex-row justify-between items-center">
      <div class="flex flex-row items-center gap-5">
        <CommonLogo color="light" />
        <h3 class="text-[white] font-bold text-[34px] leading-[40.8px] tracking-[0.25px]">Macode</h3>
      </div>
      <ul class="flex flex-col items-center lg:flex-row gap-16">
        <li class="footer__nav--items">
          <NuxtLinkLocale href="#">{{ $t("tutorial") }}</NuxtLinkLocale>
        </li>
        <li class="footer__nav--items">
          <NuxtLinkLocale href="#">{{ $t("caseStudies") }}</NuxtLinkLocale>
        </li>
        <li class="footer__nav--items">
          <NuxtLinkLocale href="#">{{ $t("resources") }}</NuxtLinkLocale>
        </li>
      </ul>
    </div>
    <div class="w-full h-px bg-[#A3A3A3]"></div>
    <div class="lg:px-20 py-[30px] flex flex-col md:flex-row justify-between items-center">
      <div class="w-full md:w-max flex flex-row items-center justify-around gap-5">
        <NuxtImg src="/images/Icon/ic-fb.png" class="w-3 h-6 object-cover cursor-pointer lg:hover:scale-150 transition-transform" />
        <NuxtImg src="/images/Icon/ic-insta.png" class="w-6 h-6 object-cover cursor-pointer lg:hover:scale-150 transition-transform" />
        <NuxtImg
          src="/images/Icon/ic-linkedin.png"
          class="w-6 h-6 object-cover cursor-pointer lg:hover:scale-150 transition-transform"
        />
        <NuxtImg
          src="/images/Icon/ic-twitter.png"
          class="w-6 h-6 object-cover cursor-pointer lg:hover:scale-150 transition-transform"
        />
        <NuxtImg src="/images/Icon/ic-mail.png" class="w-6 h-6 object-cover cursor-pointer lg:hover:scale-150 transition-transform" />
      </div>
      <div class="w-full h-px bg-[#A3A3A3] md:hidden mt-7 mb-[38px]"></div>
      <p
        class="text-[white] font-extralight text-[22px] lg:text-2xl leading-[26.4px] lg:leading-[28.8px] tracking-[0.25px]"
      >
        © 2021 Copyright.<span
          class="text-[#DDF247] font-[250] text-[22px] lg:text-2xl leading-[26.4px] lg:leading-[28.8px] tracking-[0.25px] ml-2.5"
          >Macode.io</span
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__nav--items {
  @apply text-white font-extralight text-xl leading-6 lg:font-[250] lg:text-3xl lg:leading-9 tracking-[0.25px];
}
</style>
