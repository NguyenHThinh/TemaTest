<script lang="ts" setup></script>

<template>
  <ul class="hidden lg:flex flex-row gap-6">
    <li class="header__nav--items">
      <NuxtLinkLocale href="#">{{ $t("tutorial") }}</NuxtLinkLocale>
    </li>
    <li>·</li>
    <li class="header__nav--items">
      <NuxtLinkLocale href="#">{{ $t("caseStudies") }}</NuxtLinkLocale>
    </li>
    <li>·</li>
    <li class="header__nav--items">
      <NuxtLinkLocale href="#">{{ $t("resources") }}</NuxtLinkLocale>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.header__nav--items {
  @apply font-[250] text-[22px] leading-[26.4px] tracking-[0%];
  font-family: Aeonik;
}
</style>
