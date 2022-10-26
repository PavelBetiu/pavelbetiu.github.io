<template>
  <div class="row">
    <div class="col-md-12">
      <Table :data="tableInput" />
    </div>
    <div class="form-group col-md-12">
      <hr>
   </div>
    <div class="col-md-12">
      <ForceGraph :data='forceGraphInput'/>
    </div>
  </div>
</template>

<script>
import Table from "@/components/widgets/Table";
import ForceGraph from "@/components/widgets/force-graph";
import { CsclResult } from "@/data-objects/cscl-result";
import { convertToContributionsTable, convertToForceGraphInput } from "./cscl-converters";

export default {
  components: {
    Table,
    ForceGraph,
  },
  props: {
    data: CsclResult,
  },
  data() {
    return {};
  },
  created() {
    this.tableInput = convertToContributionsTable(this.data);
    this.forceGraphInput = convertToForceGraphInput(this.data);
  },
};
</script>
