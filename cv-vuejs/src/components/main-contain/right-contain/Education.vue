<template>
  <div class="education">
    <h2>Education</h2>
    <hr />
    <ul>
      <li v-for="i in educations" :key="i.id">
        <h5><i class="bx bx-book"></i> {{ i.name }}</h5>
        <h6>{{ i.period }}</h6>
        <p>{{ i.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["educations"],
};
</script>

<style>
</style>