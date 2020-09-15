<template>
  <div id="app">
    <my-header />
    <home />
    <my-footer />
  </div>
</template>


<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import Home from "./pages/Home.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#home {
  flex-grow: 1;
}
</style>
