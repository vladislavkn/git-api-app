import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
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
    initialiseStore(state) {
      const savedState = localStorage.getItem("app-state");
      if (savedState) {
        this.replaceState(Object.assign(state, JSON.parse(savedState)));
      }
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

store.subscribe((mutation, state) => {
  localStorage.setItem("app-state", JSON.stringify(state));
});

export default store;
