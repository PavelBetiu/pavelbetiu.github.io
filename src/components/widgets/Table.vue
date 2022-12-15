<template>
  {{debug()}}
  <p-datatable :value="data.rows" :responsiveLayout="isScrollable ? 'scroll' : ''" :scrollable="isScrollable" :scrollHeight="isScrollable ? '400px' : ''">
    <p-column
      v-for="col of data.columns"
      :field="col.key"
      :header="col.displayName"
      :key="col.key"
      :sortable="true"
    >
      <template v-if="col.key == 'status'" #body="{data}">
        <span :class="getStatusClass(data.status)">{{ data.status }}</span>
      </template>
  </p-column>
  </p-datatable>
</template>

<script>
import { TableInput } from "./table-input";

export default {
  props: {
    data: TableInput,
    isScrollable: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods:{
    debug(){
      console.debug(this.data);
    },
    getStatusClass(status){
      if (status == 'completed') return 'badge bg-success';
      if (status == 'pending') return 'badge bg-warning';
    }
  }
};
</script>
