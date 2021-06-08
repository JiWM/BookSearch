import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  isAuth: false,
  id: null,
  token: null,
  localhost: "http://192.168.0.116:5000"
});

export const mutations = {
  loggedIn(state) {
    state.isAuth = true;
  },
  loginid(state, payload) {
    state.id = payload;
  },
  logintoken(state, payload) {
    state.token = payload;
  },
  logout(state) {
    state.isAuth = false;
    state.id = null;
    state.token = null;
  }
};

export const getters = {
  isAuthenticated(state) {
    return state.isAuth;
  },

  loggedInUser(state) {
    return state.id;
  },

  loggedInToken(state) {
    return state.token;
  }
};

export const actions = {
  loggedIn(context) {
    context.commit("loggedIn");
  }
};
