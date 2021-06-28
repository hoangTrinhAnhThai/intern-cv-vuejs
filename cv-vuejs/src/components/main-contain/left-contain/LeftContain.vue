<template>
  <div class="left-contain">
    <div class="containL">
      <profile v-bind:profile="myJson.profile" />
      <contact v-bind:contact="myJson.contact" />
      <skill v-bind:skills="myJson.skills" />
      <language v-bind:languages="myJson.languages" />
      <achievement v-bind:achivements="myJson.achivements" />
    </div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Language from "./Language.vue";
import Skill from "./Skill.vue";
import Contact from "./Contact.vue";
import Achievement from "./Achievement.vue";

export default {
  name: "left-contain",
  props: ["myJson"],
  data() {
    return {};
  },
  components: {
    language: Language,
    skill: Skill,
    profile: Profile,
    contact: Contact,
    achievement: Achievement,
  },
};
</script>

<style>
.containL,
.containR {
  padding: 1.875em;
  padding-bottom: 10vh;
}
</style>