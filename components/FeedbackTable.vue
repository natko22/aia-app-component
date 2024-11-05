<template>
  <Table class="w-full table-fixed">
    <TableHead>
      <TableRow>
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
        >
          Skill
        </TableCell>
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
        >
          Rating
        </TableCell>
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
        >
          Comments
        </TableCell>
        <TableCell
          class="flex-1 text-center text-sm font-extrabold text-neutral-500 dark:text-neutral-400"
        >
          Include
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow v-for="skill in skills" :key="skill.name">
        <TableCell class="px-8 py-4 text-sm font-medium text-gray-900">
          {{ skill.name }}
        </TableCell>
        <TableCell class="px-8 py-4">
          <SkillRating
            :skill="skill.name"
            :maxValue="skill.maxValue"
            :defaultValue="skill.defaultValue"
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import SkillRating from "./SkillRating.vue";
import skillsData from "../data/skills";

const skills = ref(skillsData);
</script>
