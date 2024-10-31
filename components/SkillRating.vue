<template>
  <div>
    <span>{{ skill }}:</span>

    <div class="flex items-center space-x-2">
      <template v-for="i in maxValue" :key="i">
        <svg
          class="size cursor-pointer"
          :class="i <= currentRating ? 'text-primary' : 'text-gray-300'"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          @click="setRating(i)"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </template>
    </div>
    <div class="flex items-center">
      <input
        type="number"
        v-model="currentRating"
        @input="updateRating"
        :min="0"
        :max="maxValue"
        class="input-badge text-center"
        placeholder="Type score"
      />
      <button @click="resetRating" class="reset-btn cursor-pointer">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  skill: string;
  maxValue: number;
  defaultValue: number;
}>();

const emit = defineEmits(["update"]);
const currentRating = ref(props.defaultValue);

function setRating(value: number) {
  currentRating.value = currentRating.value === value ? 0 : value;
  emit("update", currentRating.value);
}

function updateRating() {
  if (currentRating.value < 0) currentRating.value = 0;
  if (currentRating.value > props.maxValue)
    currentRating.value = props.maxValue;
  emit("update", currentRating.value);
}

// Function to reset rating
function resetRating() {
  currentRating.value = 0;
  emit("update", currentRating.value);
}
</script>

<style scoped>
.text-primary {
  color: #6a9c78;
}
.text-gray-300 {
  color: #d1d5db;
}
.cursor-pointer {
  cursor: pointer;
}
.size {
  width: 2rem;
  height: 2rem;
}
.input-badge {
  width: 5rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0.5rem 0.5rem;
  color: #6a9c78;
  background-color: #f0f4f3;
  outline: none;
  transition: box-shadow 0.2s ease;
}
.input-badge:focus {
  box-shadow: 0 0 0 2px #6a9c78;
}
.reset-btn {
  width: 6rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0.5rem 0.5rem;
  color: #6a9c78;
  background-color: #f0f4f3;
  outline: none;
  margin-left: 1rem;
}
.reset-btn:hover {
  box-shadow: 0 0 0 2px #6a9c78;
}
svg:hover {
  transition: color 0.3s ease;
  color: #5a8d6b;
}
</style>
