import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: [],
    userName: "",
  },
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
  },
  actions: {
    async fetchRepos({ commit, state }) {
      try {
        const repos = await fetch(
          `https://api.github.com/users/${state.userName}/repos`
        ).then((res) => res.json());
        if (repos.message && repos.message == "Not Found") {
          commit("setRepos", []);
        } else {
          commit("setRepos", repos);
        }
      } catch (e) {
        console.error(e);
        commit("setRepos", []);
      }
    },
  },
  modules: {},
});
