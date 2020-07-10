<template>
  <form @submit.prevent="fetchRepos">
    <span class="form__fetch-type">GET:</span>
    <label class="form__url-preview">
      https://api.github.com/users/
      <input class="form__input" type="text" v-model="userName" />
      /repos
    </label>
    <button>Fetch</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    fetchRepos() {
      if (this.userName.length)
        this.$store.dispatch("fetchRepos", this.userName);
    },
  },
};
</script>

<style>
.form__fetch-type {
  font-weight: bold;
}

.form__url-preview {
  color: #555;
}

.form__input {
  outline: none;
}
</style>
