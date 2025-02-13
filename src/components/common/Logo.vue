<script lang="ts" setup>
defineProps({
  color: {
    type: String as PropType<"light" | "dark">,
    default: 'dark'
  }
})
</script>

<template>
  <div class="w-8 aspect-square min-w-8">
    <NuxtImg :src="color === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'" loading="lazy" class="object-cover w-full h-full"  />
  </div>
</template>