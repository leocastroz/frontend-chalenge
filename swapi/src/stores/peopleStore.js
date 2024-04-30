import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_URL;

export const usePeopleStore = defineStore({
  id: 'people',
  state: () => ({
    people: [],
    nextPage: null,
    previousPage: null,
  }),
  actions: {
    fetchPeople(url = `${BASE_URL}/people`) {
      axios
        .get(url)
        .then((response) => {
          this.people = response.data.results;
          this.nextPage = response.data.next;
          this.previousPage = response.data.previous;
        })
        .catch((error) => {
          console.error('Error fetching people:', error);
        });
    },
    fetchNextPage() {
      if (this.nextPage) {
        this.fetchPeople(this.nextPage);
      }
    },
    fetchPreviousPage() {
      if (this.previousPage) {
        this.fetchPeople(this.previousPage);
      }
    },
  },
});
