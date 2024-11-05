<template>
  <div>
    <!-- <span>{{ skill }}</span> -->

    <div class="flex items-center space-x-2">
      <template v-for="i in maxValue" :key="i" @click="setRating(i)">
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
    <div class="flex items-center"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps<{
  skill: string;
  maxValue: number;
  defaultValue: number;
}>();

const emit = defineEmits<{
  (e: "update", value: number): void;
}>();
const currentRating = ref(props.defaultValue);

function setRating(value: number) {
  if (currentRating.value !== value) {
    currentRating.value = value;
    emit("update", currentRating.value);
  }
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
svg:hover {
  transition: color 0.3s ease;
  color: #5a8d6b;
}
</style>
