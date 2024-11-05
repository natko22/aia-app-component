<template>
  <Table class="w-full table-auto">
    <TableHead>
      <TableRow>
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
          >Skill</TableCell
        >
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
          >Rating</TableCell
        >
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
          >Comments</TableCell
        >
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
          >Include</TableCell
        >
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow v-for="(skill, index) in paginatedSkills" :key="skill.name">
        <TableCell class="px-8 py-4 text-sm font-medium text-gray-900">{{
          skill.name
        }}</TableCell>

        <TableCell class="px-8 py-4">
          <SkillRating
            :skill="skill.name"
            :maxValue="skill.maxValue"
            :defaultValue="skill.defaultValue"
            v-model="skill.defaultValue"
          />
        </TableCell>

        <TableCell class="px-8 py-4">
          <select
            v-model="skill.selectedComment"
            class="form-select w-full border border-gray-300 rounded-md py-2"
          >
            <option disabled value="">Select Feedback</option>
            <option
              v-for="comment in skill.comments"
              :key="comment"
              :value="comment"
            >
              {{ comment }}
            </option>
          </select>
        </TableCell>

        <TableCell class="px-8 py-4">
          <input
            type="checkbox"
            v-model="skill.includeComment"
            class="form-checkbox h-5 w-5 text-gray-600"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <!--  Pagination  -->
  <div class="flex items-center justify-end py-4 space-x-2">
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === 1"
      @click="goToPreviousPage"
    >
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === totalPages"
      @click="goToNextPage"
    >
      Next
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { Button } from "@/components/ui/button";
import skillsData from "../data/skills";
import SkillRating from "./SkillRating.vue";

// Define the reactive states
const skills = ref(skillsData);
const currentPage: Ref<number> = ref(1);
const rowsPerPage: Ref<number> = ref(5);

// Compute the paginated data based on current page and rows per page
const paginatedSkills = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  const end = start + rowsPerPage.value;
  return skills.value.slice(start, end);
});

// Calculate total pages based on rowsPerPage and total skills
const totalPages = computed(() =>
  Math.ceil(skills.value.length / rowsPerPage.value)
);

// Handlers for page navigation
function goToNextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

function goToPreviousPage() {
  if (currentPage.value > 1) currentPage.value--;
}
</script>
