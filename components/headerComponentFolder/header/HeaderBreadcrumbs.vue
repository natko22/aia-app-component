<template>
  <Breadcrumb class="flex justify-center">
    <BreadcrumbList>
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <BreadcrumbItem>
          <BreadcrumbLink v-if="item.link" :href="item.link">{{
            item.label
          }}</BreadcrumbLink>
          <BreadcrumbPage v-else>{{ item.label }}</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1">
          <Slash />
        </BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-vue-next";

interface BreadcrumbItem {
  label: string;
  link?: string;
}

defineProps<{
  breadcrumbs: BreadcrumbItem[];
}>();
</script>
