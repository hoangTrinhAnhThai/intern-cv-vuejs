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
  methods: {
    handleEdit() {
      this.$emit("changeEditEvent");
    },
    handleSave() {
      let requireNotNull = false;
      for (let i = 0; i < this.infJson.length; i++) {
        console.log(this.infJson[i].type);
        if (this.infJson[i].type == null || this.infJson[i].title == null) {
          console.log("null rooi");
          requireNotNull = true;
          console.log(requireNotNull);
          break;
        }
      }
      for (let k = 0; k < this.newInfs.length; k++) {
        if (this.newInfs[k].type == null || this.newInfs[k].title == null) {
          console.log("null rooi");
          requireNotNull = true;
          break;
        }
      }
      if (requireNotNull) {
        this.$emit("changeSaveEvent", requireNotNull);
      } else {
        if (this.newInfs.length != 0) {
          this.axios.post("/", this.newInfs).then((response) => {
            console.log("add", response);
          });
        }
        if (this.infJson.length != 0) {
          this.axios.put("/", this.infJson).then((response) => {
            console.log("update", response);
          });
        }
        if (this.deleteArr.length != 0) {
          console.log("PARAMS DELETE", this.deleteArr);
          for (let index = 0; index < this.deleteArr.length; index++) {
            // const element = array[index];
            this.axios
              .delete("/", { data: this.deleteArr[index] })
              .then((response) => {
                console.log("delete", response);
              });
          }
        }
        this.$emit("changeSaveEvent", requireNotNull);
      }
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