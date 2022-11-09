<template>
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <a class="nav-link" :class="{active: isActiveContributions}" id="contributions-tab" data-toggle="tab" href="#contributions" role="tab" aria-controls="contributions" :aria-selected="!isActiveContributions" @click="selectTab(0)">Contributions</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" :class="{active: !isActiveContributions}" id="participants-tab" data-toggle="tab" href="#participants" role="tab" aria-controls="participants" :aria-selected="isActiveContributions" @click="selectTab(1)">Participants</a>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
    <!-- Contributions related graphs and charts -->
    <div class="tab-pane fade" :class="isActiveContributions ? 'show active' : ''" id="contributions" role="tabpanel" aria-labelledby="contributions-tab">
        <div class="row p-4">
            <div class="col-md-12 card">
                <Table :data="tableInput" />
            </div>
            <div class="form-group col-md-12 p-3">
                <hr>
            </div>
            <div class="col-md-12 card">
                <StackedLineGradientGraph :data="stackedLineGradientGraphInput" />
            </div>
        </div>
    </div>

    <!-- Participants related graphs and charts -->
    <div class="tab-pane fade" :class="!isActiveContributions ? 'show active' : ''" id="participants" role="tabpanel" aria-labelledby="participants-tab">
        <div class="row p-4">
            <div class="col-md-12 card">
                <ForceGraph :data='forceGraphInput' />
            </div>
            <div class="form-group col-md-12 p-3">
                <hr>
            </div>
            <div class="col-md-12 card">
                <StackedLineChart :data="stackedLineChartInput" />
            </div>
            <div class="form-group col-md-12 p-3">
                <hr>
            </div>
            <div class="col-md-12 card">
                <CircularGraph :data="circularGraphInput" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Table from "@/components/widgets/Table";
import CircularGraph from '@/components/widgets/circular-graph.vue';
import ForceGraph from "@/components/widgets/force-graph";
import StackedLineChart from "@/components/widgets/StackedLineChart";
import { CsclResult } from "@/data-objects/cscl-result";
import { convertToContributionsTable, convertToParticipantsTable, convertToForceGraphInput, convertToCircularGraphInput, convertToStackedLineChartInput, convertToStackedLineGradientGraphInput } from "./cscl-converters";
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
    methods: {
      selectTab(tab) {
        if (tab === 0) {
          this.isActiveContributions = true;
        } else {
          this.isActiveContributions = false;
        }
      }
    },
    data() {
        return {
            isActiveContributions: true,

        };
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
