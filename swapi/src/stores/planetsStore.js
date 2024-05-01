import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_URL;

export const usePlanetsStore = defineStore({
  id: 'planets',
  state: () => ({
    planets: [],
    nextPage: null,
    previousPage: null,
  }),
  actions: {
    fetchPlanets(url = `${BASE_URL}/planets`) {
      axios
        .get(url)
        .then((response) => {
          this.planets = response.data.results;
          this.nextPage = response.data.next;
          this.previousPage = response.data.previous;
        })
        .catch((error) => {
          console.error('Error fetching planets:', error);
        });
    },
    fetchNextPage() {
      if (this.nextPage) {
        this.fetchPlanets(this.nextPage);
      }
    },
    fetchPreviousPage() {
      if (this.previousPage) {
        this.fetchPlanets(this.previousPage);
      }
    },
  },
});
