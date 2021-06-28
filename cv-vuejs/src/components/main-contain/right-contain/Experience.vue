<template>
  <div class="experience">
    <h2>Experience</h2>
    <hr />
    <ul>
      <li v-for="i in experiences" :key="i.id">
        <h5>{{ i.name }}</h5>
        <h6>{{ i.period }}</h6>
        <p>{{ i.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["experiences"],
};
</script>

<style>
</style>