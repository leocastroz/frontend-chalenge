import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

const BASE_URL = import.meta.env.VITE_URL;

export const useSpeciesStore = defineStore({
  id: 'species',
  state: () => ({
    species: [],
    nextPage: null,
    previousPage: null,
  }),
  actions: {
    fetchSpecies(url = `${BASE_URL}/species`) {
      api.get(url)
        .then((response) => {
          this.species = response.data.results;
          this.nextPage = response.data.next;
          this.previousPage = response.data.previous;
        })
        .catch((error) => {
          console.error('Error fetching species:', error);
        });
    },
    fetchNextPage() {
      if (this.nextPage) {
        this.fetchSpecies(this.nextPage);
      }
    },
    fetchPreviousPage() {
      if (this.previousPage) {
        this.fetchSpecies(this.previousPage);
      }
    },
  },
});
