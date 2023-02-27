<template>
  <p-datatable :value="data.rows" :responsiveLayout="isScrollable ? 'scroll' : ''" :scrollable="isScrollable" :scrollHeight="isScrollable ? '400px' : ''">
    <p-column
      v-for="col of data.columns"
      :field="col.key"
      :header="col.displayName"
      :key="col.key"
      :sortable="true"
    >
      <template v-if="col.key == 'datasetActions'" #body="{data}">
        <!-- For each row, we need to render a button for each action -->
        <span v-for="action of data.datasetActions" :key="action.name">
          <button :class="'btn '+ action.class + ' m-1'" @click="action.action(data.id)"> {{ action.name }} </button>
        </span>
      </template>

      <template v-else-if="col.key == 'model_action'" #body="{data}">
        <!-- For each row, we need to render a button for each action -->
        <div>
          <div class="row" v-for="action of data.model_action" :key="action.name">
            <button :class="'btn btn-sm '+ action.styleClass + ' m-1'" @click="action.action(data.id)"> {{ action.name }} </button>
          </div>
        </div>
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
};
</script>
