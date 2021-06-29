<template>
  <div id="app">
    <top-contain v-bind:myJson="myJson.profile" />
    <main-contain v-bind:myJson="myJson" />
  </div>
</template>

<script>
import json from "./data.json";
import TopContain from "./components/top-contain/TopContain.vue";
import MainContain from "./components/main-contain/MainContain.vue";
export default {
  name: "App",
  data() {
    return {
      myJson: json,
    };
  },
  components: {
    "top-contain": TopContain,
    "main-contain": MainContain,
  },
};
</script>

<style>
:root {
  --background-color: #262626;
  --wl: 35%;
  --wr: 65%;
  --color: white;
}

html {
  box-sizing: border-box;
  margin: 0;
  padding: 2vh;
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  letter-spacing: 0.1em;
  min-width: 360px;
}

.email {
  letter-spacing: 0em;
}

h2,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bolder;
}
h3 {
  color: rgb(114, 66, 66);
}
h4 {
  color: rgb(121, 83, 74);
}

h2 {
  margin-bottom: 0;
  margin-top: 2.1875em;
  font-weight: bolder;
}

hr {
  border-top: 0.01px solid rgb(173, 169, 169);
  font-weight: lighter;
}

#app {
  width: 65%;
  margin: 0 auto;
  border: 0.5px solid grey;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* ---------------------RESPONSIVE---------------------------- */

@media screen and (min-width: 68.8125em) and (max-width: 81.25em) {
  #app {
    width: 95%;
    padding: 2%;
  }
}

@media screen and (min-width: 81.3125em) and (max-width: 100em) {
  #app {
    width: 80%;
  }
}

@media screen and (max-width: 68.75em) {
  .top-contain {
    height: 50%;
  }
  .top-contain .name {
    display: none;
  }

  .top,
  .main-contain {
    display: block;
  }

  .vien {
    background-color: #fff;
    text-align: center;
  }

  .main-contain {
    /* margin-top: -5vh; */
  }

  .right-contain {
    margin-top: -8vh;
  }

  .top-contain .avt {
    display: none;
  }

  .top-contain .inf {
    display: block;
    text-align: center;
  }

  .contain {
    width: 100%;
    padding: 0;
    margin: 0 auto;
  }

  .main-contain {
    display: block;
  }

  .left-contain {
    background-color: #fff;
    color: #000;
    font-weight: 900;
  }

  h2 {
    margin-top: 1em;
    text-align: center;
    margin-bottom: 0.625em;
    font-weight: bolder;
    box-shadow: #262626;
  }

  .vien {
    margin-top: 5vh;
  }
  img {
    border: 2px solid rgb(73, 72, 72);
    padding: 5px;
  }
  hr {
    width: 20%;
    margin-top: -1em;
  }
}

@media screen and (max-width: 25.875em) {
  img {
    width: 50%;
    height: 50%;
  }

  .top-contain,
  .main-contain,
  #app {
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 0.8em;
  }
}

@media screen and (max-width: 68.75em) and (min-width: 64em) {
  #app {
    width: 85%;
  }
}
</style>
