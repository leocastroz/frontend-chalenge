<template>
  <div class="q-pa-md">
    <CustomTable
      :title="title"
      :columns="peoplesMock"
      :rows="peopleStore.people"
      :pagination="pagination"
      @row-click="selectPeople"
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
    <PeopleDetails :person="selectedPerson" @close="dialogVisible = false"  v-model="dialogVisible" />
  </div>
</template>

<script setup>
import CustomTable from '../tables/CustomTable.vue';
import PeopleDetails from '../modals/PeopleDetails.vue';
import { useRouter } from 'vue-router';
import { ref, computed } from "vue";
import { usePeopleStore } from "../stores/peopleStore.js";
import { peoplesMock } from '../mocks/peoplesMock.js';

const router = useRouter();
const peopleStore = usePeopleStore();
const title = computed(() => `Star Wars - ${router.currentRoute.value.name}`);
const dialogVisible = ref(false);
const selectedPerson = ref(null);

function selectPeople(evt, row) {
  selectedPerson.value = row;
  dialogVisible.value = true;
};

peopleStore.fetchPeople();
</script>
