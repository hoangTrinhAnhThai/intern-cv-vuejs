<template>
  <div class="top-contain">
    <div class="top">
      <div class="left-contain"></div>
      <div style="background-color: #fff" class="right-contain"></div>
    </div>
    <div class="contain">
      <div class="vien">
        <div class="avt">
          <div class="img">
            <img :src="myJson.img" alt="" />
          </div>
          <div class="name">
            <h1>{{ myJson.name }}</h1>
            <br />
            <h3>Developer</h3>
          </div>
        </div>
        <div class="inf">
          <img :src="myJson.img" alt="" />
          <h2>{{ myJson.name }}</h2>
          <h3>Developer</h3>
          <!-- <hr id="sure" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myJson"],
};
</script>

<style>
.left-contain {
  flex-basis: var(--wl);
  background-color: var(--background-color);
  color: white;
}

.right-contain {
  flex-basis: var(--wr);
}

.top {
  display: flex;
  line-height: 2rem;
}

.top {
  height: 5vh;
}

.contain {
  background-color: var(--background-color);
}

.inf {
  display: none;
}

.vien {
  padding: 0.1875em;
  height: 97.5%;
}

.avt {
  margin: 0 7em;
  border-radius: 300px;
  height: 100%;
  background-color: var(--color);
  display: flex;
}

.img {
  flex-basis: 30%;
  padding: 0.625em;
}

img {
  border-radius: 50%;
  height: 100%;
  border: 2px solid rgb(73, 72, 72);
  /* padding: 5px; */
}

.name {
  flex-basis: 55%;
  text-align: center;
  padding-top: 3vh;
}

.h2 {
  font-size: 1.8em;
}
</style>