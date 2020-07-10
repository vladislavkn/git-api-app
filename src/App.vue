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
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 768px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  #app {
    padding: 0 16px;
  }
}
</style>
