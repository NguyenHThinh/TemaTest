<template>
  <ul class="hidden lg:flex flex-row gap-6">
    <li class="header__nav--items">
      <NuxtLink href="#">Tutorials</NuxtLink>
    </li>
    <li>·</li>
    <li class="header__nav--items">
      <NuxtLink href="#">Case studies</NuxtLink>
    </li>
    <li>·</li>
    <li class="header__nav--items">
      <NuxtLink href="#">Resources</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup></script>
<style scoped>
.header__nav--items {
  font-family: Aeonik;
  font-weight: 250;
  font-size: 22px;
  line-height: 26.4px;
  letter-spacing: 0%;
}
</style>
