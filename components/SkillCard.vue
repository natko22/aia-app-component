<template>
  <div class="skill-card">
    <h2 class="text-center text-2xl font-semibold mb-4">Skill Ratings</h2>
    <div v-for="skill in skills" :key="skill.name" class="skill-item mb-4">
      <!-- <h3 class="text-lg font-medium">{{ skill.name }}</h3> -->
      <SkillRating
        :skill="skill.name"
        :maxValue="skill.maxValue"
        :defaultValue="skill.defaultValue"
        @update="updateRating(skill.name, $event)"
      />
    </div>
  </div>
</template>

<script setup>
import SkillRating from "./SkillRating.vue";

const props = defineProps({
  skills: Array,
});

function updateRating(skillName, value) {
  console.log(`Updated rating for ${skillName}: ${value}`);
}
</script>

<style scoped>
.skill-card {
  padding: 2rem;
  background-color: #f4f8f2;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.skill-item {
  margin-bottom: 1.5rem;
}
</style>
