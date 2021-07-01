<template>
  <div class="infor">
    <ul v-show="!isEdit">
      <li v-for="i in infJson" :key="i.id" v-show="!i.delete_flag">
        <h2>{{ i.type }}</h2>
        <hr />
        <h3>
          <i class="bx bx-book"></i>
          {{ i.title }}
        </h3>

        <h4>
          {{ i.period }}
        </h4>
        <p>
          {{ i.description }}
        </p>
      </li>
    </ul>
    <ul class="edit" v-show="isEdit">
      <li v-for="i in infJson" :key="i.id" v-show="!i.delete_flag">
        <h2><input type="text" v-model="i.type" /></h2>
        <hr />
        <h3>
          <input type="text" v-model="i.title" />
        </h3>

        <h4>
          <input type="text" v-model="i.period" />
        </h4>
        <p>
          <input type="text" v-model="i.description" />
        </p>
        <i v-on:click="deleteInf(i.id)" class="bx bx-trash"></i>
        <i v-on:click="addNewInf" class="bx bx-plus-circle"></i>
      </li>
    </ul>
    <ul class="edit" v-show="isEdit" v-if="newInfs">
      <li v-for="(i, index) in newInfs" :key="index">
        <h2><input type="text" v-model="i.type" /></h2>
        <hr />
        <h3>
          <input type="text" v-model="i.title" />
        </h3>

        <h4>
          <input type="text" v-model="i.period" />
        </h4>
        <p>
          <input type="text" v-model="i.description" />
        </p>
        <i v-on:click="deleteNewInf(index)" class="bx bx-trash"></i>
        <i v-on:click="addNewInf" class="bx bx-plus-circle"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // newInfs: [],
    };
  },
  props: ["isEdit", "infJson", "newInfs"],
  methods: {
    deleteInf(id) {
      console.log(id);
      this.$emit("deleteInfR", id);
    },
    addNewInf() {
      var newInf = {
        type: null,
        title: null,
        period: null,
        description: null,
      };
      // newInfs.push(newInf);
      this.$emit("addNewInfR", newInf);
    },
    deleteNewInf(index) {
      console.log(index);
      console.log(this.newInfs);
      this.newInfs.splice(index, 1);
    },
  },
};
</script>

<style>
</style>