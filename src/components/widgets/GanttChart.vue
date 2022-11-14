<template>
<div :class="$style.gantt" ref="ganttchartdiv">
</div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
    name: 'GanttChart',
    mounted() {
        let chart = am4core.create(this.$refs.ganttchartdiv, am4charts.XYChart);

        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.paddingRight = 30;

        chart.dateFormatter.dateFormat = "MM-yyyy"

        let colorSet = new am4core.ColorSet();
        colorSet.saturation = 0.4;

        const colorIndex = 2;

        chart.data = [{
            "category": "A1.",
            "start": "2020-09",
            "end": "2020-12",
            "color": colorSet.getIndex(colorIndex).brighten(0),
            "task": "Gather relevant datasets"
        }, {
            "category": "A2.",
            "start": "2020-11",
            "end": "2021-12",
            "color": colorSet.getIndex(colorIndex).brighten(0),
            "task": "Build multi-lingual automated AoA models"
        }, {
            "category": "A2.1.",
            "start": "2020-11",
            "end": "2021-07",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Create baseline English model"
        }, {
            "category": "A2.2.",
            "start": "2021-03",
            "end": "2021-09",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Train AoA models for additional languages"
        }, {
            "category": "A2.3.",
            "start": "2021-07",
            "end": "2021-12",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": " Bridge word learning rates modeled by automated AoA scores across languages"
        }, {
            "category": "A3.",
            "start": "2021-01",
            "end": "2022-08",
            "color": colorSet.getIndex(colorIndex).brighten(0),
            "task": "Automated Essay Scoring"
        }, {
            "category": "A3.1.",
            "start": "2021-01",
            "end": "2021-09",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Train models that combine ReaderBench textual\n complexity indices with word embeddings"
        }, {
            "category": "A3.2.",
            "start": "2021-07",
            "end": "2022-01",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Assess multi-lingual AES models"
        }, {
            "category": "A3.3.",
            "start": "2022-01",
            "end": "2022-08",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Develop and deploy a dedicated service that takes as input a collection\n of documents and their scores and establishes the most predictive model"
        }, {
            "category": "A4.",
            "start": "2022-01",
            "end": "2022-10",
            "color": colorSet.getIndex(colorIndex).brighten(0),
            "task": "Automated Writing Evaluation"
        }, {
            "category": "A4.1.",
            "start": "2022-01",
            "end": "2022-04",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Run experiments on paragraph restructuring"
        }, {
            "category": "A4.2.",
            "start": "2022-04",
            "end": "2022-06",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Generate rules for a given domain based on textual complexity\n indices and PCA components to provide feedback"
        }, {
            "category": "A4.3.",
            "start": "2022-06",
            "end": "2022-10",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Detect out-of-place phrases"
        }, {
            "category": "A5.",
            "start": "2021-01",
            "end": "2022-10",
            "color": colorSet.getIndex(colorIndex).brighten(0),
            "task": "Text simplification"
        }, {
            "category": "A5.1.",
            "start": "2021-01",
            "end": "2021-06",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Prepare datasets consisting of proper alignments"
        }, {
            "category": "A5.2.",
            "start": "2021-06",
            "end": "2022-01",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Train multiple sequence-to-sequence models"
        }, {
            "category": "A5.3.",
            "start": "2022-01",
            "end": "2022-10",
            "color": colorSet.getIndex(colorIndex).brighten(1),
            "task": "Analyze results and iteratively improve methods"
        }, {
            "category": "A6.",
            "start": "2021-01",
            "end": "2022-10",
            "color": colorSet.getIndex(colorIndex).brighten(0),
            "task": "Dissemination of results"
        }];

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.text = "Activities";
        categoryAxis.renderer.minGridDistance = 15;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 70;
        dateAxis.baseInterval = {
            count: 1,
            timeUnit: "month"
        };
        dateAxis.renderer.tooltipLocation = 0;

        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.columns.template.height = am4core.percent(70);
        series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

        series1.dataFields.openDateX = "start";
        series1.dataFields.dateX = "end";
        series1.dataFields.categoryY = "category";
        series1.columns.template.propertyFields.fill = "color"; // get color from data
        series1.columns.template.propertyFields.stroke = "color";
        series1.columns.template.strokeOpacity = 1;

        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarY = new am4core.Scrollbar();

        this.chart = chart;
    },
    beforeUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
}
</script>

<style module>
.gantt {
    width: 100%;
    height: 500px;
}
</style>
