<template>
  <div class="right-contain">
    <div class="containR">
      <education v-bind:educations="myJson.educations" v-bind:isEdit="isEdit" />
      <experience
        v-bind:experiences="myJson.experiences"
        v-bind:isEdit="isEdit"
      />
      <div class="interest">
        <h2>Interest</h2>
        <hr />
        <ul>
          <li><i class="bx bx-movie-play"></i></li>
          <li><i class="bx bx-headphone"></i></li>
          <li><i class="bx bx-camera"></i></li>
          <li><i class="bx bx-map"></i></li>
          <li><i class="bx bx-swim"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Education from "./Education.vue";
import Experience from "./Experience.vue";
export default {
  name: "right-contain",
  props: ["myJson", "isEdit"],
  data() {
    return {};
  },

  components: {
    Education,
    Experience,
  },
};
</script>

<style>
.right-contain {
  color: black;
  font-weight: 900;
}

.interest ul {
  width: 100%;
  display: flex;
  align-content: space-around;
}

.interest li {
  margin: 0 auto;
}

.interest i {
  font-size: 2.5em;
  color: rgb(54, 54, 54);
}
</style>