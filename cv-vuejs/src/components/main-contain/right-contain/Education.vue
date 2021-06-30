<template>
  <div class="education">
    <h2>Education</h2>
    <hr />
    <ul class="edit" v-show="isEdit">
      <li v-for="i in educations" :key="i.id">
        <h5>
          <input type="text" v-model="i.name" />
        </h5>

        <h6>
          <input type="text" v-model="i.period" />
        </h6>
        <p>
          <input type="text" v-model="i.content" />
        </p>
        <i class="bx bx-trash"></i> <i class="bx bx-plus-circle"></i>
      </li>
    </ul>
    <ul v-show="!isEdit">
      <li v-for="i in educations" :key="i.id">
        <h5>
          <i class="bx bx-book"></i>
          {{ i.name }}
        </h5>

        <h6>
          {{ i.period }}
        </h6>
        <p>
          {{ i.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["educations", "isEdit"],
  data() {
    return {};
  },
};
</script>

<style>
</style>