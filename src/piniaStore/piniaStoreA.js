import { defineStore } from "pinia"

export const usePiniaStoreA = defineStore('piniaStoreA', {
    state: () => {
        return {
            msg: `I'm piniaStoreA`,
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        }
    }
})