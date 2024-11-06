<template>
  <div class="header-container mt-4 bg-gray-100 p-4 shadow-lg">
    <HeaderBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="main-content flex justify-between items-center"></div>
  </div>
</template>

<script>
import HeaderBreadcrumbs from "./HeaderBreadcrumbs.vue";

export default {
  name: "HeaderSkeleton",
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
  components: {
    HeaderBreadcrumbs,
  },
};
</script>
