<script setup>
import { ref } from 'vue'

import TheTodos from './components/TheTodos.vue'
const showTodo = ref(false)
</script>

<template>
  <main class="container">
    <div class="flex items-center justify-center py-8">
      <button
        class="bg-blue-500 text-white px-4 py-2 cursor-pointer"
        @click="showTodo = !showTodo">
        show Todos
      </button>
    </div>
    <div v-if="showTodo">
      <h1 class="text-center">TODO APP</h1>
      <TheTodos class="max-w-7xl mx-auto" />
    </div>
    <div v-else>this is the opps of the show todo</div>
  </main>
</template>

<style scoped></style>
