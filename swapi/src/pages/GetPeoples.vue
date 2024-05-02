<template>
  <div class="q-pa-md">
    <CustomTable
      :title="title"
      :columns="columnsMock"
      :rows="peopleStore.people"
      :pagination="pagination"
      @row-click="selectPerson"
    />
    <div class="tw-flex tw-justify-center tw-gap-10 tw-py-3 tw-text-xs">
      <q-btn
        @click="peopleStore.fetchPreviousPage"
        :disabled="!peopleStore.previousPage"
        label="back"
        icon="arrow_back"
        class="tw-bg-gray-700"
      />
      <q-btn
        @click="peopleStore.fetchNextPage"
        :disabled="!peopleStore.nextPage"
        icon-right="arrow_forward"
        label="next"
        class="tw-bg-gray-700"
      />
    </div>
    <PersonDetails :person="selectedPerson" @close="dialogVisible = false"  v-model="dialogVisible" />
  </div>
</template>

<script setup>
import CustomTable from '../tables/CustomTable.vue';
import PersonDetails from '../modals/PersonDetails.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import { usePeopleStore } from "../stores/peopleStore.js";
import { columnsMock } from '../mocks/columnsMock.js';

const router = useRouter();
const peopleStore = usePeopleStore();
const title = computed(() => `Star Wars - ${router.currentRoute.value.name}`);
console.log('rota atual do usuário ->', router.currentRoute.value)

const dialogVisible = ref(false);
const selectedPerson = ref(null);

const closeDialog = () => {
  dialogVisible.value = false;
};

const selectPerson = (evt, row) => {
  selectedPerson.value = row;
  dialogVisible.value = true;
};

peopleStore.fetchPeople();
</script>
