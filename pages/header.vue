<template>
  <div>
    <!-- Render HeaderSkeleton with props for testing -->
    <HeaderSkeleton
      :breadcrumbs="breadcrumbItems"
      :tabs="tabItems"
      :actions="actionItems"
    />
  </div>
</template>

<script setup>
import HeaderSkeleton from "@/components/headerComponentFolder/header/HeaderSkeleton.vue";
import { breadcrumbItems, tabItems, actionItems } from "@/data/headerData";
</script>
