<template>
  <p-datatable 
    :value="data.rows" 
    :responsiveLayout="isScrollable ? 'scroll' : ''" 
    :scrollable="isScrollable" 
    :scrollHeight="isScrollable ? '450px' : ''"
    :stripedRows="true" >
    <p-column
      v-for="col of data.columns"
      :field="col.key"
      :header="col.displayName"
      :key="col.key"
      :sortable="isSortable"
    >
    <template v-if="withCustomBody" #body="{data}">
      <slot :rowData="data" :currentColumnData="col" name="column">
      </slot>
    </template>
  </p-column>
  </p-datatable>
</template>

<script>
import {
    TableInput
} from "./table-input";

export default {
  props: {
    data: TableInput,
    isScrollable: {
      type: Boolean,
      default: true,
      required: false,
    },
    isSortable: {
      type: Boolean,
      default: true,
      required: false,
    },
    withCustomBody: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>