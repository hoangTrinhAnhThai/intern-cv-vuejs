<template>
  <div class="edit-component">
    <div class="edit-btn">
      <button v-on:click="handleEdit" class="edit">EDIT</button>
    </div>
    <div class="save-btn">
      <button v-on:click="handleSave">SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infJson", "deleteArr", "newInfs"],
  data() {
    return {
      url: "https://cv-php-api.herokuapp.com",
    };
  },
  methods: {
    handleEdit() {
      this.$emit("changeEditEvent");
    },
    handleSave() {
      console.log("save-update", this.infJson);
      console.log("save-delete", this.deleteArr);
      console.log("save-add", this.newInfs);
      // for(var i = 0; i <this.infJson.length; i++ ) {

      // }

      this.axios.post(`${this.url}/`, this.newInfs).then((response) => {
        console.log("add", response);
      });

      this.axios.put(`${this.url}/`, this.infJson).then((response) => {
        console.log("update", response);
      });

      this.axios.delete(`${this.url}/`, this.deleteArr).then((response) => {
        console.log("delete", response);
      });
      this.$emit("changeSaveEvent", [], []);
    },
  },
};
</script>

<style>
.edit-component {
  display: flex;
  justify-content: center;
}
button {
  margin: 2em 2em 1em;
  font-size: 1.2em;
  padding: 0.5em 1em;
  border: 0.1px solid var(--background-color);
  border-radius: 5px;
}
.edit-component .edit {
  background-color: var(--background-color);
  color: white;
}
</style>