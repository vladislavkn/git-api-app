<template>
  <div id="app">
    <RepoForm />
  </div>
</template>

<script>
import RepoForm from "./components/RepoForm";

export default {
  name: "App",
  components: { RepoForm },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
