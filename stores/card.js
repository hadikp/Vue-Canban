import { defineStore } from "pinia"

export const useCardStore = defineStore('card', {
  state: () => ({card: {} }),
},
)