<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <th
    :class="
      cn(
        ' h-12   text-center align-middle font-extrabold text-neutral-500 [&:has([role=checkbox])]:pr-o dark:text-neutral-400',
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
