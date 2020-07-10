import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: [],
  },
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    },
  },
  actions: {
    async fetchRepos({ commit }, userName) {
      const repos = await fetch(
        `https://api.github.com/users/${userName}/repos`
      ).then((res) => res.json());

      commit("setRepos", repos);
    },
  },
  modules: {},
});
