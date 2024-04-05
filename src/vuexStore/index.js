import { createStore } from "vuex";

export const vuexStore = createStore({
    state() {
        return {
            msg: `I'm vuex`,
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})