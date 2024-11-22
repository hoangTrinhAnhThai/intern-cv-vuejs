<template>
  <div class="experience">
    <h2>Experience</h2>
    <hr />
    <ul class="edit" v-show="isEdit">
      <li v-for="i in experiences" :key="i.id">
        <h3>
          <input type="text" v-model="i.name" />
        </h3>

        <h4>
          <input type="text" v-model="i.period" />
        </h4>
        <p>
          <input type="text" v-model="i.content" />
        </p>
        <i class="bx bx-trash"></i> <i class="bx bx-plus-circle"></i>
      </li>
    </ul>
    <ul v-show="!isEdit">
      <li v-for="i in experiences" :key="i.id">
        <h3>
          <i class="bx bx-book"></i>
          {{ i.name }}
        </h3>

        <h4>
          {{ i.period }}
        </h4>
        <p>
          {{ i.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["experiences", "isEdit"],
  data() {
    return {};
  },
};
</script>

<style>
</style>