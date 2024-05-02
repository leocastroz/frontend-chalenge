import { defineStore } from 'pinia';
import { api } from '../boot/axios.js';

const BASE_URL = import.meta.env.VITE_URL;

export const useVehicleStore = defineStore({
  id: 'vehicles',
  state: () => ({
    vehicles: [],
    nextPage: null,
    previousPage: null,
  }),
  actions: {
    fetchVehicle(url = `${BASE_URL}/vehicles`) {
      api.get(url)
        .then((response) => {
          this.vehicles = response.data.results;
          this.nextPage = response.data.next;
          this.previousPage = response.data.previous;
        })
        .catch((error) => {
          console.error('Error fetching vehicles:', error);
        });
    },
    fetchNextPage() {
      if (this.nextPage) {
        this.fetchVehicle(this.nextPage);
      }
    },
    fetchPreviousPage() {
      if (this.previousPage) {
        this.fetchVehicle(this.previousPage);
      }
    },
  },
});
