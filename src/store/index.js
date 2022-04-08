import { createStore } from "vuex";

export default createStore({
  state: {
    names: [
      { id: 1, name: "Sachin" },
      { id: 2, name: "Sourav" },
      { id: 3, name: "Viru" },
      { id: 4, name: "Yuvraj" },
      { id: 5, name: "Anil" },
    ],
  },
  getters: {
    allNames: (state) => {
      return state.names;
    },
  },
  mutations: {
    newName: (state, userInfo) => {
      state.names = [userInfo, ...state.names];
    },
    deleteName: (state, id) => {
      state.names = state.names.filter((name) => name.id != id);
    },
  }, //commit
  actions: {
    addName: (context, userInfo) => {
      console.log(context);
      context.commit("newName", userInfo);
    },
    removeName: (context, id) => {
      context.commit("deleteName", id);
    },
  },
  modules: {},
});
