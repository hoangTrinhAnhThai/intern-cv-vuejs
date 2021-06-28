<template>
  <div class="achievement">
    <h2>Achievements</h2>
    <hr />
    <p v-for="i in achivements" :key="i.id">{{ i.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["achivements"],
};
</script>

<style>
</style>