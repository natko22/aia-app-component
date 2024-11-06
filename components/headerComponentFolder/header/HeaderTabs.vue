<template>
  <div class="flex space-x-4 justify-end mt-4 mr-4">
    <Tabs>
      <TabsList class="flex space-x-1">
        <TabsTrigger
          v-for="(tab, index) in tabs"
          :key="index"
          :value="tab.label"
          @click="selectTab(index)"
          :class="[
            'px-4 py-2 text-gray-700 hover:text-gray-900 rounded-md transition',
            activeTabIndex === index ? 'bg-white ' : 'bg-transparent',
          ]"
        >
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>

  <div
    class="w-full max-w-4xl mx-auto mt-12 p-8 h-auto bg-white rounded-md shadow-md border to-black"
  >
    <div class="text-gray-800 text-base flex justify-center items-center">
      {{ activeTabContent }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { defineProps } from "vue";

interface TabItem {
  label: string;
  onClick: () => void;
  content: string;
}

const props = defineProps<{
  tabs: TabItem[];
}>();

const activeTabIndex = ref(0);

function selectTab(index: number) {
  activeTabIndex.value = index;
  props.tabs[index].onClick();
}

const activeTabContent = computed(
  () => props.tabs[activeTabIndex.value].content
);
</script>
