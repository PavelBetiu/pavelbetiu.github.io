<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75 relative" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')' }">
        <span class="mask bg-gradient-dark opacity-8"></span>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="text-white">Processing Queue</h1>
                </div>
            </div>
        </div>

        <div class="position-absolute w-100 z-index-1 bottom-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="moving-waves">
                    <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div class="container p-9">
    <div class="card shadow-lg">
        <Table :data="tableData" isScrollable="true" />
    </div>
</div>
</template>

<script>
import Table from "@/components/widgets/Table.vue";
import {
    convertToProcessingQueueTable
} from "@/components/experiments/cscl/cscl-converters";
import {
    ProcessingQueueService
} from "@/services/processing-queue-service";

export default {
    name: "ProcessingQueueView",
    data() {
        return {
            tableContent: [],
        };
    },
    components: {
        Table,
    },
    created() {
        ProcessingQueueService.getJobsData().then((data) => {
            this.tableContent = data;
        });
    },
    computed: {
        tableData: {
            get() {
                return convertToProcessingQueueTable(this.tableContent);
            },
        },
    },
}
</script>

<style>

</style>
