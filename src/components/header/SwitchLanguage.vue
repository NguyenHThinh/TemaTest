<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();

const currentLanguage = computed(() =>
  locales.value.find((i) => i.code === locale.value)
);

const isShowDropdown = ref(false);

// methods
const handleOpenDrowdown = () => {
  isShowDropdown.value = true;
};

const handleCloseDrowdown = () => {
  isShowDropdown.value = false;
};

const handleChangeLanguage = (lang: "en" | "vi") => {
  setLocale(lang);
  handleCloseDrowdown();
};
</script>

<template>
  <div class="relative">
    <button
      class="rounded-xl gap-2 py-1 px-2 bg-[#E8E8E8] flex flex-row items-center"
      @click="isShowDropdown ? handleCloseDrowdown() : handleOpenDrowdown()"
    >
      <NuxtImg
        :src="currentLanguage?.flag"
        class="rounded-full w-[21px] aspect-square object-cover"
      />
      <p class="uppercase languages__text--cur">{{ currentLanguage?.code }}</p>
      <NuxtImg src="/images/Icon/linear - arrow-down.png" class="min-w-5 h-5 transition-transform" :class="{'rotate-180': isShowDropdown}" />
    </button>
    <div
      class="bg-[#E8E8E8] rounded-lg p-2 space-y-2 pt-3 absolute z-50 w-max mt-2"
      :class="isShowDropdown ? 'block' : 'hidden'"
    >
      <button
        :class="[
          'flex-row w-full gap-2 items-center p-2 pr-4 rounded-lg flex lg:hover:bg-white lg:hover:bg-opacity-45 transition-all',
          { '!bg-white': lang.code === locale },
        ]"
        v-for="lang in locales"
        :key="lang.code"
        @click="handleChangeLanguage(lang.code)"
      >
        <NuxtImg
          :src="lang?.flag"
          class="rounded-full w-[21px] aspect-square object-cover"
        />
        <p class="languages__dropdown-items uppercase">{{ lang.name }}</p>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.languages {
  &__text--cur {
    @apply font-bold text-[22px] leading-[26.4px];
  }
  &__dropdown-items {
    @apply font-normal text-base leading-[19.2px] text-[#535353];
  }
}
</style>
