<script lang="ts" setup>
const handleScrollToTop = () => {
    window.scrollTo({top:0, behavior: "smooth"})
}
</script>

<template>
  <div class="section_container flex justify-end mt-[220px] lg:mt-[232px]">
    <button
        @click="handleScrollToTop"
      class="fixed bottom-4 z-[9999] lg:z-0 right-4 lg:static w-[38px] cursor-pointer h-[38px] m-4 rounded-full bg-[#727371] border-2 border-[#E4E5DD] flex items-center justify-center lg:hover:bg-opacity-50 transition-colors"
    >
      <NuxtImg src="/images/Icon/ic-scroll-top.png" class="w-4 h-[10px]" />
    </button>
  </div>
</template>

<style></style>
