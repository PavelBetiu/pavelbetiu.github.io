<template>
  <div class="row">
    <div class="col-md-12">
      <Table :data="tableInput" />
    </div>
  </div>
</template>

<script>
import Table from "@/components/widgets/Table";
import { CsclResult } from "@/data-objects/cscl-result";
import { convertToContributionsTable } from "./cscl-converters";

export default {
  components: {
    Table,
  },
  props: {
    data: CsclResult,
  },
  data() {
    return {};
  },
  created() {
    this.tableInput = convertToContributionsTable(this.data);
  },
};
</script>
