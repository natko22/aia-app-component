<template>
  <div class="flex justify-end space-x-4">
    <Button
      v-for="(action, index) in actions"
      :key="index"
      :onClick="action.onClick"
      variant="default"
    >
      {{ action.label }}
    </Button>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";

export default {
  name: "HeaderActions",
  props: {
    actions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    Button,
  },
};
</script>
