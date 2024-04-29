<template>
  <div class="q-pa-md">
    <q-table
      style="height: 650px;font-size: 12px;"
      flat
      bordered
      title="Star Wars - Peoples"
      :rows="people"
      :columns="columns"
      row-key="name"
      :pagination="pagination"
      :rows-per-page-options="[1]"
      @row-click="selectPerson"
    />
    <q-btn
      @click="fetchPreviousPage"
      :disabled="!previousPage"
      label="Previous Page"
    />
    <q-btn @click="fetchNextPage" label="Next Page" />
    <div v-if="selectedPerson">
      <h2>{{ selectedPerson.name }}</h2>
      <p>Height: {{ selectedPerson.height }}</p>
      <p>Mass: {{ selectedPerson.mass }}</p>
      <p>Gender: {{ selectedPerson.gender }}</p>
      <p>Homeworld: {{ selectedPerson.homeworld }}</p>
      <p>Birth Year: {{ selectedPerson.birth_year }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "birth_year",
    label: "Birth Year",
    align: "center",
    field: "birth_year",
    sortable: true,
  },
  {
    name: "eye_color",
    label: "Eye Color",
    align: "center",
    field: "eye_color",
    sortable: true,
  },
  {
    name: "gender",
    label: "Gender",
    align: "center",
    field: "gender",
    sortable: true,
  },
  {
    name: "height",
    label: "Height",
    align: "center",
    field: "height",
    sortable: true,
  },
  {
    name: "hair_color",
    label: "Hair Color",
    align: "center",
    field: "hair_color",
    sortable: true,
  },
];

const pagination = ref({
  rowsPerPage: 10,
});

const selectedPerson = ref(null);

const selectPerson = (evt, row) => {
  selectedPerson.value = row;
};

const people = ref([]);
const nextPage = ref(null);
const previousPage = ref(null);

const fetchPeople = (url = "https://swapi.py4e.com/api/people/") => {
  axios
    .get(url)
    .then((response) => {
      people.value = response.data.results;
      nextPage.value = response.data.next;
      previousPage.value = response.data.previous;
    })
    .catch((error) => {
      console.error("Error fetching people:", error);
    });
};

const fetchNextPage = () => {
  if (nextPage.value) {
    fetchPeople(nextPage.value);
  }
};

const fetchPreviousPage = () => {
  if (previousPage.value) {
    fetchPeople(previousPage.value);
  }
};

fetchPeople();
</script>
