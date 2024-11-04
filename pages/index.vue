<template>
  <div class="container">
    <SkillCard :skills="skills" />
  </div>
</template>

<script setup>
import SkillCard from "../components/SkillCard.vue";
import skills from "../data/skills.js";
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>
