<template>
  <div class="achievement">
    <h2>Achievements</h2>
    <hr />
    <!-- <p v-for="i in achivements" :key="i.id">{{ i.content }}</p> -->
    <span class="edit black" v-show="isEdit">
      <ul>
        <li v-for="i in achivements" :key="i.id">
          {{ i.content }}
          <!-- <input type="text" v-model="i.content" /> -->
          <!-- <i class="bx bx-trash"></i><i class="bx bx-plus-circle"></i> -->
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  props: ["achivements", "isEdit"],
  data() {
    return {};
  },
};
</script>

<style>
</style>