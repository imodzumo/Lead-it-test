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
        },
        addBot(state, data) {
            state.botsTableData.push({...data});
        },
        deleteBot(state, id) {
            const index = state.botsTableData.findIndex(item => item.id === id);
            state.botsTableData.splice(index, 1);
        },
        updateBot(state, data) {
            const index = state.botsTableData.findIndex(item => item.id === data.id);
            state.botsTableData.splice(index, 1 , data);
        },
    }
});