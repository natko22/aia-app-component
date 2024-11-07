<template>
  <section>
    <div class="w-full mt-4 bg-gray-100 p-4 shadow-lg space-y-4">
      <div class="flex justify-center">
        <HeaderBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <!-- Header Info Section -->
      <div class="flex-1">
        <h2 class="text-xl font-semibold">{{ title }}</h2>
        <div class="mt-2 text-gray-600 space-y-1">
          <p v-for="(description, index) in descriptions" :key="index">
            {{ description }}
          </p>
          <p class="font-semibold text-gray-800">{{ date }}</p>
        </div>
      </div>
      <div><HeaderActions :actions="actions" /></div>
    </div>
    <div>
      <HeaderTabs :tabs="tabs" />
    </div>
    <div class="flex-1">
      <slot name="info"></slot>
    </div>
  </section>
</template>
<script>
import HeaderBreadcrumbs from "./HeaderBreadcrumbs.vue";
import HeaderTabs from "./HeaderTabs.vue";
import HeaderActions from "./HeaderActions.vue";

export default {
  name: "HeaderSkeleton",
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    actions: {
      type: Array,
      required: false,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
      default: "Default Title",
    },
    descriptions: {
      type: Array,
      required: true,
      default: () => ["Default Description"],
    },
    date: {
      type: String,
      required: true,
      default: "No Date Provided",
    },
  },
  components: {
    HeaderBreadcrumbs,
    HeaderTabs,
    HeaderActions,
  },
};
</script>
