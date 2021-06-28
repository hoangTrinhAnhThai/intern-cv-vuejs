<template>
  <div class="profile">
    <h2>Profile</h2>
    <hr />
    <div class="information">
      <div class="name">
        <span><i class="bx bx-user"></i> {{ profile.name }}</span>
      </div>
      <div class="birth">
        <span><i class="bx bx-calendar"></i> {{ profile.birth }}</span>
      </div>
      <div class="gender">
        <span><i class="bx bx-female-sign"></i> {{ profile.gender }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile"],
};
</script>

<style>
</style>