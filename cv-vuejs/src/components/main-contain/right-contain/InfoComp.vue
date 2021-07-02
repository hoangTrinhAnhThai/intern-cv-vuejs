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
        <h3>
          <input type="text" v-model="i.title" />
        </h3>

        <h4>
          <input type="text" v-model="i.period" />
        </h4>
        <p>
          <input type="text" v-model="i.description" />
        </p>
        <div class="icon">
          <i v-on:click="deleteInf(i.id)" class="bx bx-trash"></i>
          <i v-on:click="addNewInf" class="bx bx-plus-circle"></i>
        </div>
      </li>
    </ul>
    <ul class="edit" v-show="isEdit" v-if="newInfs">
      <li v-for="(i, index) in newInfs" :key="index">
        <h2><input type="text" v-model="i.type" placeholder="Type..." /></h2>
        <h3>
          <input type="text" v-model="i.title" placeholder="Title..." />
        </h3>

        <h4>
          <input type="text" v-model="i.period" placeholder="Period..." />
        </h4>
        <p>
          <input
            type="text"
            v-model="i.description"
            placeholder="Description"
          />
        </p>
        <div class="icon">
          <i v-on:click="deleteNewInf(index)" class="bx bx-trash"></i>
          <i v-on:click="addNewInf" class="bx bx-plus-circle"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["isEdit", "infJson", "newInfs"],
  methods: {
    deleteInf(id) {
      this.$emit("deleteInfR", id);
    },
    addNewInf() {
      var newInf = {
        type: null,
        title: null,
        period: null,
        description: null,
      };
      this.$emit("addNewInfR", newInf);
    },
    deleteNewInf(index) {
      console.log(this.newInfs);
      this.newInfs.splice(index, 1);
    },
  },
};
</script>

<style>
.icon {
  display: none;
}

.edit li:hover .icon {
  display: block;
}
</style>