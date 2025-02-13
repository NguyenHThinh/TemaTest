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
const {t} = useI18n()

useSeoMeta({
  title: `${t("home")} | Macode`,
  description: t('improveYourSkill'),
});

</script>
