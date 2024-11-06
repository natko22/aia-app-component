<template>
  <div>
    <!-- Render HeaderSkeleton with props for testing -->
    <HeaderSkeleton :breadcrumbs="breadcrumbItems" />
  </div>
</template>

<script setup>
import HeaderSkeleton from "/components/headerComponentFolder/header/HeaderSkeleton.vue";
import { breadcrumbItems } from "~/data/headerData";
</script>
