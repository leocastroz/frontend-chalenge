<template>
  <q-table
    style="height: 650px;font-size: 12px;"
    flat
    bordered
    :title="title"
    :rows="rows"
    :columns="columns"
    row-key="name"
    :pagination="pagination"
    :rows-per-page-options="[10]"
    @row-click="onRowClick"
  />
</template>

<script>
export default {
  props: {
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
  },
  methods: {
    onRowClick(evt, row) {
      this.$emit('row-click', evt, row);
    }
  }
};
</script>
