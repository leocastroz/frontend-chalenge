<template>
  <div class="q-pa-md">
    <CustomTable
      :title="title"
      :columns="vehicleMock"
      :rows="vehicleStore.vehicles"
      :pagination="pagination"
      @row-click="selectVehicle"
    />
    <div class="tw-flex tw-justify-center tw-gap-10 tw-py-3 tw-text-xs">
      <q-btn
        @click="vehicleStore.fetchPreviousPage"
        :disabled="!vehicleStore.previousPage"
        label="back"
        icon="arrow_back"
        class="tw-bg-gray-700"
      />
      <q-btn
        @click="vehicleStore.fetchNextPage"
        :disabled="!vehicleStore.nextPage"
        icon-right="arrow_forward"
        label="next"
        class="tw-bg-gray-700"
      />
    </div>
    <VehiclesDetails :vehicles="selectedPerson" @close="dialogVisible = false"  v-model="dialogVisible" />
  </div>
</template>

<script setup>
import CustomTable from '../tables/CustomTable.vue';
import VehiclesDetails from '../modals/VehiclesDetails.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import { useVehicleStore } from "../stores/vehicleStore.js";
import { vehicleMock } from '../mocks/vehiclesMock.js';

const router = useRouter();
const vehicleStore = useVehicleStore();
const title = computed(() => `Star Wars - ${router.currentRoute.value.name}`);
const dialogVisible = ref(false);
const selectedPerson = ref(null);

function selectVehicle(evt, row) {
  selectedPerson.value = row;
  dialogVisible.value = true;
};

vehicleStore.fetchVehicle();
</script>
