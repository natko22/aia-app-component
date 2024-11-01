<template>
  <div
    class="mt-8 mb-10 border border-borderColor rounded-lg overflow-hidden bg-[ #f4f8f2]"
  >
    <table class="min-w-full divide-y divide-borderColor">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Skill
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Rating
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Comments
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Include
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr v-for="skill in skills" :key="skill.name">
          <td class="px-6 py-4 text-sm font-medium text-gray-900">
            {{ skill.name }}
          </td>
          <td class="px-6 py-4">
            <SkillRating
              :maxValue="skill.maxValue"
              :defaultValue="skill.defaultValue"
            />
          </td>

          <td class="px-6 py-8">
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
          </td>
          <td class="px-6 py-4">
            <input
              type="checkbox"
              v-model="skill.includeComment"
              class="form-checkbox h-5 w-5 text-grey-600"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SkillRating from "../components/SkillRating.vue";
import skillsData from "../data/skills";

const skills = ref(skillsData);
</script>

<style scoped></style>
