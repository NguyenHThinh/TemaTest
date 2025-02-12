<template>
  <NuxtLayout name="default-layout">
    <HomeWellcome />

    <HomePartner />

    <HomeFeatures />

    <HomeHosting />

    <HomeRunning />

    <HomePackage />

    <HomeFAQ />
  </NuxtLayout>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: "Home | TEMA test",
});
</script>
