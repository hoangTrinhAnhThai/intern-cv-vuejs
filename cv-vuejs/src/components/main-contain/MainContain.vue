<template>
  <div class="main-contain">
    <left-contain v-bind:myJson="myJson" v-bind:isEdit="isEdit" />
    <right-contain v-bind:myJson="myJson" v-bind:isEdit="isEdit" />
  </div>
</template>

<script>
import LeftContain from "./left-contain/LeftContain.vue";
import RightContain from "./right-contain/RightContain.vue";
export default {
  name: "main-contain",
  props: ["myJson", "isEdit"],
  components: {
    "left-contain": LeftContain,
    "right-contain": RightContain,
  },
  data() {
    return {};
  },
};
</script>

<style>
.main-contain {
  display: flex;
}
.left-contain {
  flex-basis: var(--wl);
  background-color: var(--background-color);
  color: white;
}

.right-contain {
  flex-basis: var(--wr);
}

.containL,
.containR {
  padding: 1.875em;
  padding-bottom: 10vh;
}
</style>