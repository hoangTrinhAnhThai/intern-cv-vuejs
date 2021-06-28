<template>
  <div class="language">
    <h2>Language</h2>
    <hr />
    <ul>
      <li v-for="i in languages" :key="i.id">{{ i.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "language",
  props: ["languages"],
};
</script>

<style>
</style>