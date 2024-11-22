<template>
  <div class="skill">
    <h2>Skill</h2>
    <hr />
    <ul>
      <li v-for="i in skills" :key="i.id">
        <label for="i.id">{{ i.name }}</label>
        <div class="mucdo">
          <span class="y" v-bind:style="{ width: i.percent + '%' }"></span>
          <span
            class="n"
            v-bind:style="{ width: 100 - i.percent + '%' }"
          ></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "skill",
  props: ["skills"],
};
</script>

<style>
.skill div {
  display: flex;
}

.mucdo {
  width: 100%;
}

.containL .y {
  background-color: rgb(138, 202, 165);
  height: 0.5em;
  border-radius: 10px;
  width: 2vw;
}
.containL .n {
  background-color: rgb(214, 202, 202);
  height: 0.25em;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 0.125em;
}
</style>