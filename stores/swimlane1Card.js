import { defineStore } from "pinia"

export const useSwimlane1CardStore = defineStore('swimlane1Card', {
  state: () => ({swimlane1Card: {}
  }),
  getters: {
    activeCard: (state) => {
      return () => state.swimlane1Card.filter((card) => card.status === 'ACTIVE')
    }
  }
})