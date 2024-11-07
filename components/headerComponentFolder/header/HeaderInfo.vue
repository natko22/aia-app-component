<template>
  <div>
    <h2 class="text-xl font-semibold">{{ title }}</h2>
    <div class="mt-2 text-gray-600 space-y-1">
      <p v-for="(description, index) in descriptions" :key="index">
        {{ description }}
      </p>
      <p class="font-semibold text-gray-800">{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderInfo",
  props: {
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
