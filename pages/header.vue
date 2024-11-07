<template>
  <div>
    <!-- Render HeaderSkeleton with props for testing -->
    <HeaderSkeleton
      :breadcrumbs="breadcrumbItems"
      :tabs="tabItems"
      :actions="actionItems"
      :title="infoSectionData.title"
      :descriptions="infoSectionData.descriptions"
      :date="infoSectionData.date"
    />
  </div>
</template>

<script setup>
import HeaderSkeleton from "@/components/headerComponentFolder/header/HeaderSkeleton.vue";
import {
  breadcrumbItems,
  tabItems,
  actionItems,
  infoSectionData,
} from "@/data/headerData";
</script>
