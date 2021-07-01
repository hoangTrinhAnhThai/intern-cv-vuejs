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
  data() {
    return {};
  },
  methods: {
    handleEdit() {
      this.$emit("changeEditEvent");
    },
    handleSave() {
      this.$emit("changeSaveEvent");
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