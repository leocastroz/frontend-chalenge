<template>
  <div class="q-pa-md">
    <CustomTable
      :title="title"
      :columns="columnsMock"
      :rows="planetsStore.planets"
      :pagination="pagination"
      @row-click="selectPlanet"
    />
    <div class="tw-flex tw-justify-center tw-gap-10 tw-py-3 tw-text-xs">
      <q-btn
        @click="planetsStore.fetchPreviousPage"
        :disabled="!planetsStore.previousPage"
        label="back"
        icon="arrow_back"
        class="tw-bg-gray-700"
      />
      <q-btn
        @click="planetsStore.fetchNextPage"
        :disabled="!planetsStore.nextPage"
        icon-right="arrow_forward"
        label="next"
        class="tw-bg-gray-700"
      />
    </div>
    <PlanetsDetails :planet="selectedPerson" @close="dialogVisible = false"  v-model="dialogVisible" />
  </div>
</template>

<script setup>
import CustomTable from '../tables/CustomTable.vue';
import PlanetsDetails from '../modals/PlanetsDetails.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import { usePlanetsStore } from "../stores/planetsStore.js";
import { columnsMock } from '../mocks/planetsMock.js';

const router = useRouter();
const planetsStore = usePlanetsStore();
const title = computed(() => `Star Wars - ${router.currentRoute.value.name}`);
console.log('rota atual do usuário ->', router.currentRoute.value)

const dialogVisible = ref(false);
const selectedPerson = ref(null);

const closeDialog = () => {
  dialogVisible.value = false;
};

const selectPlanet = (evt, row) => {
  selectedPerson.value = row;
  dialogVisible.value = true;
};

planetsStore.fetchPlanets();
</script>
