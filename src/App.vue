<script setup>
import { ref, watch } from 'vue'

const name = ref('ahmed saad')
const descripton = ref('Lorem ipsum dolor sit amet.  ')
const agree = ref(true)

const teamMembers = ref([])
const picked = ref('one')
const selected = ref('')
const age = ref(0)

watch(name, () => {})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <p>Form Input Bindings</p>

    <form class="space-y-8">
      <input
        type="text"
        class="border mt-8 px-4 py-1 border-gray-200 outline-0 rounded-md"
        placeholder="text here"
        v-model="name" />
      <br />
      <textarea
        name="description"
        id=""
        class="border mt-8 px-4 py-1 border-gray-400 outline-0 rounded-md"
        v-model="descripton"></textarea>
      <br />
      <p>Checkbox</p>
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          name="agree"
          v-model="agree" />
        <label for="agree">Agree for teram and condition</label>
        {{ agree }}
      </div>
      <div>
        <p>choose team members</p>
        <div>
          <input
            type="checkbox"
            name="john"
            value="john"
            id="john"
            v-model="teamMembers" />
          <label for="john">John</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="jack"
            value="jack"
            id="jack"
            v-model="teamMembers" />
          <label for="jack">jack</label>
        </div>

        {{ teamMembers }}
      </div>
      <hr />
      <div>
        <p>Picked:</p>

        <div class="flex items-center gap-2">
          <input
            type="radio"
            name=""
            id="one"
            value="one"
            v-model="picked" />
          <label for="one">One</label>
        </div>
        <div class="flex items-center gap-2">
          <input
            type="radio"
            name=""
            id="two"
            value="two"
            v-model="picked" />
          <label for="two">Two</label>
        </div>
        <p>{{ picked }}</p>
      </div>
      <hr />

      <div>Selected: {{ selected }}</div>

      <select v-model="selected">
        <option
          disabled
          value="">
          Please select one
        </option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <hr />

      <div>
        <input
          class="border"
          type="text"
          v-model="age" />
      </div>
    </form>
  </div>
</template>

<style></style>
