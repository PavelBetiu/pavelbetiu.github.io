<template>
<div :class="$style['gantt']" ref="ganttchartdiv">
</div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { GanttChartInput } from "./gantt-chart-input";

am4core.useTheme(am4themes_animated);

export default {
    name: 'GanttChart',
    props: {
        data: GanttChartInput
    },
    mounted() {
        let chart = am4core.create(this.$refs.ganttchartdiv, am4charts.XYChart);

        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.paddingRight = 30;

        chart.dateFormatter.dateFormat = "MM-yyyy"

        let colorSet = new am4core.ColorSet();
        colorSet.saturation = 0.4;

        const colorIndex = 2;

        console.log(this.data);

        chart.data = this.data.data;

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
