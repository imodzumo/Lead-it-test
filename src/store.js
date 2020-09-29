import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        botsId: 0,
        botsTableData: []
    },
    mutations: {
        increment (state) {
            state.botsId++
        }
    }
});