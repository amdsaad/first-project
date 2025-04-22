<template>
  <button class="border px-4 py-2 bg-blue-500 text-white cursor-pointer flex gap-2 items-center">
      <slot />
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(['text'])
</script>

<style></style>
