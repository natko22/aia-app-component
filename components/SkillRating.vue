<template>
  <div class="flex justify-center items-center mb-3">
    <span class="w-32 text-sm font-semibold text-gray-700">{{ skill }}:</span>
    <div class="flex items-center space-x-2">
      <template v-for="i in maxValue" :key="i">
        <svg
          class="size cursor-pointer"
          :class="i <= currentRating ? 'text-primary' : 'text-gray-300'"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
          @click="setRating(i)"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
      </template>
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
  // Toggle to 0 if the same rating is clicked
  currentRating.value = currentRating.value === value ? 0 : value;
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
  height: 3rem;
}

svg:hover {
  transition: color 0.3s ease;
  color: #5a8d6b;
}
</style>
