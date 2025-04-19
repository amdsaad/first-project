<script setup>
import { ref } from 'vue'

const props = defineProps(['todoData'])

const todo = ref(props.todoData)
</script>
<template>
  <li class="flex items-center justify-between">
    <p :class="[todo.done ? 'line-through' : '', 'text-lg']">
      {{ todo.text }}
    </p>
    <input
      type="checkbox"
      v-model="todo.done" />
  </li>
</template>

<style></style>
