<template>
  <p-datatable :value="data.rows" responsiveLayout="scroll" :scrollable="true" scrollHeight="400px">
    <p-column
      v-for="col of data.columns"
      :field="col.key"
      :header="col.displayName"
      :key="col.key"
      :sortable="true"
    ></p-column>
  </p-datatable>
</template>

<script>
import { TableInput } from "./table-input";

export default {
  props: {
    data: TableInput,
  },
  data() {
    return {};
  },
};
</script>
