<template>
  <section>
    <div class="w-full mt-4 bg-gray-100 p-4 shadow-lg space-y-4">
      <div class="flex justify-center">
        <HeaderBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
    </div>
    <div>
      <HeaderTabs :tabs="tabs" />
    </div>
  </section>
</template>
<script>
import HeaderBreadcrumbs from "./HeaderBreadcrumbs.vue";
import HeaderTabs from "./HeaderTabs.vue";

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
  },
  components: {
    HeaderBreadcrumbs,
    HeaderTabs,
  },
};
</script>
