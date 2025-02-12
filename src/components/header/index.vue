<template>
  <div
    :class="[
      'section_container left-1/2 -translate-x-1/2 transition-all px-4 lg:px-[50px] w-full fixed top-0 py-5 lg:py-14 flex flex-row justify-between lg:justify-normal items-center z-50',
      { 'bg-[#f4f4f4] shadow-sm lg:justify-between lg:!py-10': isScrolled },
    ]"
  >
    <div class="flex flex-row gap-[10px]">
      <CommonLogo color="dark" />
      <h2 class="font-bold text-xl leading-7 tracking-[0.15px] lg:hidden">macode.</h2>
    </div>
    <div class="flex flex-row items-center gap-5 lg:ml-16 xl:ml-24">
      <HeaderNavDesktop />
      <HeaderSwitchLanguage />
      <HeaderNavMobile />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
