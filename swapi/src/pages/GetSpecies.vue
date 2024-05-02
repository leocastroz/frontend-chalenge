<template>
  <div class="q-pa-md">
    <CustomTable
      :title="title"
      :columns="speciesMock"
      :rows="speciesStore.species"
      :pagination="pagination"
      @row-click="selectSpecie"
    />
    <div class="tw-flex tw-justify-center tw-gap-10 tw-py-3 tw-text-xs">
      <q-btn
        @click="speciesStore.fetchPreviousPage"
        :disabled="!speciesStore.previousPage"
        label="back"
        icon="arrow_back"
        class="tw-bg-gray-700"
      />
      <q-btn
        @click="speciesStore.fetchNextPage"
        :disabled="!speciesStore.nextPage"
        icon-right="arrow_forward"
        label="next"
        class="tw-bg-gray-700"
      />
    </div>
    <SpeciesDetails :species="selectedPerson" @close="dialogVisible = false"  v-model="dialogVisible" />
  </div>
</template>

<script setup>
import CustomTable from '../tables/CustomTable.vue';
import SpeciesDetails from '../modals/SpeciesDetails.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import { useSpeciesStore } from "../stores/specieStore.js";
import { speciesMock } from '../mocks/speciesMock.js';

const router = useRouter();
const speciesStore = useSpeciesStore();
const title = computed(() => `Star Wars - ${router.currentRoute.value.name}`);
const dialogVisible = ref(false);
const selectedPerson = ref(null);

function selectSpecie(evt, row) {
  selectedPerson.value = row;
  dialogVisible.value = true;
};

speciesStore.fetchSpecies();
</script>
