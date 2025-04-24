<script lang="ts" setup>
import { computed, ref } from 'vue'

// local components
// import AppBtn from './components/AppBtn.vue'

const books = ref([
  {
    id: 1,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    genre: 'Programming',
    published: 1999,
    read: true,
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    published: 2008,
    read: true,
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    published: 2018,
    read: true,
  },
  {
    id: 4,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Productivity',
    published: 2016,
    read: false,
  },
  {
    id: 5,
    title: 'Refactoring',
    author: 'Martin Fowler',
    genre: 'Programming',
    published: 1999,
    read: false,
  },
])

const redbooks = computed(() => {
  return books.value.filter((x) => x.read).length
})
const markAsRead = (book) => {
  // if (book.read) return
  book.read = !book.read
}

const search = ref('')

const filteredBooks = computed(() => {
  return books.value.filter(book =>
    book.title.toLowerCase().includes(search.value.toLowerCase())
  )
  // some changes

  // another
})

</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <p class="text-center">i read {{ redbooks }} books</p>
    <input type="text" v-model="search" placeholder="Search Book You Want">
    <ul class="space-y-4 grid grid-cols-2 gap-4">
      <li class="border p-4 rounded-md border-gray-200 shadow-sm" v-for="book in filteredBooks"
        @click="markAsRead(book)" :key="book.id">
        <h1 class="font-medium text-lg">{{ book.title }}</h1>
        <p>By: {{ book.author }}</p>
        <p>published: {{ book.published }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
input {
  border: 1px solid #222;
  border-radius: 10px;
  padding-right: 50px;
}
</style>


<!-- home work => Done -->
<!-- make the list filter by text -->