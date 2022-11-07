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
    <div class="form-group col-md-12">
      <hr>
    </div>
    <div class="col-md-12">
      <StackedLineChart :data="stackedLineChartInput" />
      <CircularGraph :data="circularGraphInput" />
    </div>
    <div class="col-md-12 card">
      <StackedLineGradientGraph :data="stackedLineGradientGraphInput" />
    </div>
  </div>
</template>

<script>
import Table from "@/components/widgets/Table";
import CircularGraph from '@/components/widgets/circular-graph.vue';
import ForceGraph from "@/components/widgets/force-graph";
import StackedLineChart from "@/components/widgets/StackedLineChart";
import { CsclResult } from "@/data-objects/cscl-result";
import { convertToContributionsTable, convertToForceGraphInput, convertToCircularGraphInput, convertToStackedLineChartInput, convertToStackedLineGradientGraphInput } from "./cscl-converters";
import StackedLineGradientGraph from "@/components/widgets/stacked-line-gradient-graph";

export default {
  components: {
    Table,
    ForceGraph,
    StackedLineChart,
    CircularGraph,
    StackedLineGradientGraph,
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
    this.stackedLineChartInput = convertToStackedLineChartInput(this.data);
    this.circularGraphInput = convertToCircularGraphInput(this.data);
    this.stackedLineGradientGraphInput = convertToStackedLineGradientGraphInput(this.data);
  },
};
</script>
