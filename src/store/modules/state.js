const state = {
  namespaced: true,
  state: {
    visible: false,
    idSelect: null,
  },
  getters: {
    isVisible: ({ visible }) => visible,
    isSelect: ({ idSelect }) => idSelect,
  },
  mutations: {
    TOGGLE_MODAL(state, id) {
      state.visible =
        state.visible === false
          ? (state.visible = true)
          : (state.visible = false);
      state.idSelect = id;
    },
  },
  actions: {
    toggleModal({ commit }, id) {
      commit("TOGGLE_MODAL", id);
    },
  },
};

export default state;
