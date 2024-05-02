<template>
  <q-table
    style="height: 600px;font-size: 12px;"
    flat
    bordered
    hide-bottom
    :title="title"
    :rows="rows"
    :columns="columns"
    row-key="name"
    :pagination="pagination"
    :rows-per-page-options="[10]"
    @row-click="onRowClick"
  />
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  pagination: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['row-click']);

const onRowClick = (evt, row) => {
  emit('row-click', evt, row);
};
</script>
