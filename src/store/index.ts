// src/store/index.ts
import { createStore } from "vuex";
import { UserItem } from "../types/UserItem"; // Import UserItem type

interface State {
  userBoard: UserItem[]; // State to hold user data
}

const store = createStore<State>({
  state: {
    userBoard: [], // Initialize with an empty array
  },
  mutations: {
    setUserBoard(state, users: UserItem[]) {
      state.userBoard = users;
    },
  },
  actions: {
    saveUserBoard({ commit }, users: UserItem[]) {
      commit("setUserBoard", users);
    },
  },
  getters: {
    getUserBoard(state): UserItem[] {
      return state.userBoard;
    },
  },
});

export default store;
