import { defineStore } from "pinia"

export const useSquadStore = defineStore('squad', {
  state: () => ({squad: {} }),
})