<script setup>
import { computed, reactive, ref } from 'vue'
import TheTodoItem from './TheTodoItem.vue'

const todoText = ref('')
const todos = reactive([
  {
    id: 1,
    text: 'buy milk',
    done: false,
  },
  {
    id: 2,
    text: 'buy bread',
    done: true,
  },
])

const addTodo = () => {
  // if not todo text return
  if (!todoText.value.trim()) return
  // add text to todos
  todos.push({
    id: todos.length + 1,
    text: todoText.value,
    done: false,
  })

  todoText.value = ''
}
</script>
<template>
  <div class="amd">
    <form @submit.prevent="addTodo">
      <div class="input-group">
        <input
          type="text"
          placeholder="add todo"
          v-model="todoText" />
        <button type="submit">add</button>
      </div>
    </form>
    <ul>
      <TheTodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todoData="todo" />
    </ul>
  </div>
</template>

<style></style>
