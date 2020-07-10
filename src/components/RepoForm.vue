<template>
  <form class="form" @submit.prevent="fetchRepos">
    <div>
      <span class="form__fetch-type">GET:</span>
      <label class="form__url-preview">
        https://api.github.com/users/
        <input class="form__input" type="text" v-model="userName" />
        /repos
      </label>
    </div>

    <button class="form__submit-btn">Fetch</button>
  </form>
</template>

<script>
export default {
  computed: {
    userName: {
      get() {
        return this.$store.state.userName;
      },
      set(value) {
        this.$store.commit("setUserName", value);
      },
    },
  },
  methods: {
    fetchRepos() {
      if (this.userName.length) this.$store.dispatch("fetchRepos");
    },
  },
};
</script>

<style>
.form {
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
}

.form__fetch-type {
  font-weight: bold;
}

.form__url-preview {
  color: #555;
}

.form__input {
  outline: none;
}

.form__submit-btn {
  background-color: #f0f0f0;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 8px;
}

@media screen and (max-width: 768px) {
  .form {
    margin: 32px 0;
    flex-direction: column;
    font-size: 0.75rem;
    align-items: center;
  }
  .form__input {
    width: 64px;
  }
  .form__submit-btn {
    margin-top: 16px;
  }
}
</style>
