<template>
  <div id="app">
    <RepoForm />
    <Repos />
  </div>
</template>

<script>
import RepoForm from "./components/RepoForm";
import Repos from "./components/Repos";

export default {
  name: "App",
  components: { RepoForm, Repos },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
}
</style>
