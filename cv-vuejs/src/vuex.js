import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isEdit: false
};

export default new Vuex.Store({
    state,
    getters: {
        isEdit: (state) => {
            return state.isEdit
        }
    },
    actions: {
        isEdit(context, isEdit) {
            context.commit('isEdit', isEdit)
        }
    },
    mutations: {
        isEdit(state, isEdit) {
            state.isEdit = isEdit
        }
    }
})