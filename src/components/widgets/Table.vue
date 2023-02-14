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
        <span :class="getStatusClass(data.status)">{{ getStatusName(data.status) }}</span>
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
      if (status == 1) return 'badge bg-warning';
      if (status == 2) return 'badge bg-info';
      if (status == 3) return 'badge bg-success';
      if (status == 4) return 'badge bg-danger';
    },
    getStatusName(status){
      if (status == 1) return 'Pending';
      if (status == 2) return 'In progress';
      if (status == 3) return 'Finished';
      if (status == 4) return 'Error';
    },
    getTaskTypeName(task_type) {
      if (task_type == 1) return 'Pipeline';
      if (task_type == 2) return 'CSCL';
    }
  }
};
</script>
