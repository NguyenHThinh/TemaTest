<script setup>
const isOpenNav = ref(false);

const handleOpenMenu = () => {
  isOpenNav.value = true
}

const handleCloseMenu = () => {
  isOpenNav.value = false
}
</script>

<template>
  <div class="lg:hidden">
    <!-- Button open sidebar -->
    <button @click="handleOpenMenu">
      <NuxtImg src="/images/Icon/ic-menu.png" class="w-5 h-2" />
    </button>

    <!-- Sidebar -->
    <div
      class="fixed inset-0 z-40"
      v-if="isOpenNav"
      @click="handleCloseMenu"
    ></div>
    <div
      class="z-50 fixed top-0 bottom-0 right-0 min-h-screen w-[327px] bg-[#000000DE] backdrop-blur-[10px] transition-all"
      :class="{ 'translate-x-0': isOpenNav, 'translate-x-full': !isOpenNav }"
    >
      <div class="p-4 flex justify-end items-center">
        <button @click="handleCloseMenu">
          <NuxtImg
            src="/images/Icon/ic-close.png"
            class="w-[30px] h-[30px] cursor-pointer"
          />
        </button>
      </div>
      <nav class="p-4">
        <ul class="text-white">
          <li class="py-2">
            <NuxtLinkLocale
              href="#"
              class="flex flex-row items-center justify-between cursor-pointer"
            >
              <NuxtImg
                src="/images/Icon/ic-setting1.png"
                class="w-[30px] h-[30px]"
              />
              <p class="header__nav-mb--items">{{ $t("tutorial") }}</p>
              <NuxtImg src="/images/Icon/ic-arrow-right.png" class="w-6 h-6" />
            </NuxtLinkLocale>
          </li>
          <li class="py-2">
            <NuxtLinkLocale
              href="#"
              class="flex flex-row items-center justify-between cursor-pointer"
            >
              <NuxtImg
                src="/images/Icon/ic-setting2.png"
                class="w-[30px] h-[30px]"
              />
              <p class="header__nav-mb--items">{{ $t("caseStudies") }}</p>
              <NuxtImg src="/images/Icon/ic-arrow-right.png" class="w-6 h-6" />
            </NuxtLinkLocale>
          </li>
          <li class="py-2">
            <NuxtLinkLocale
              href="#"
              class="flex flex-row items-center justify-between cursor-pointer"
            >
              <NuxtImg
                src="/images/Icon/ic-setting3.png"
                class="w-[30px] h-[30px]"
              />
              <p class="header__nav-mb--items">{{ $t("resources") }}</p>
              <NuxtImg src="/images/Icon/ic-arrow-right.png" class="w-6 h-6" />
            </NuxtLinkLocale>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header__nav-mb--items {
  @apply font-normal text-base leading-[19.2px] tracking-[0%] flex-1 ml-3;
}
</style>
