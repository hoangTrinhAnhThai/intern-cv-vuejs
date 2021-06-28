<template>
  <div class="contact">
    <h2>Contact</h2>
    <hr />
    <div class="phone">
      <span><i class="bx bx-phone"></i> {{ contact.phone }}</span>
    </div>
    <div class="email">
      <span><i class="bx bx-envelope"></i> {{ contact.email }}</span>
    </div>
    <div class="address">
      <span><i class="bx bx-home"></i> {{ contact.address }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contact"],
};
</script>

<style>
</style>