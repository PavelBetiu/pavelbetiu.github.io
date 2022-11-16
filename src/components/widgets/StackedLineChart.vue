<template>
<v-chart class="chart" :option="option" />
</template>

<script>
import {
    use
} from 'echarts/core';
import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    UniversalTransition
} from 'echarts/features';
import {
    CanvasRenderer
} from 'echarts/renderers';
import VChart, {
    THEME_KEY
} from 'vue-echarts';
import {
    ref,
    defineComponent
} from 'vue';
import {
    StackedLineChartInput
} from "./stacked-line-chart-input";

use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition
]);
export default defineComponent({
    name: 'StackedLineChart',
    props: {
        data: StackedLineChartInput
    },
    components: {
        VChart,
    },
    provide: {
        [THEME_KEY]: 'light',
    },
    setup(props) {

        const option = ref({
            title: {
                text: 'Participant Evolution'
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: props.data.series.map(s => s.name)
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '5%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {},
                    dataZoom: {
                        show: true
                    }
                }
            },
            xAxis: {
                name: 'Contribuion ID',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 14,
                    padding: 10
                },
            },
            yAxis: {
                name: "Cumulative Importance",
                nameTextStyle: {
                    fontSize: 14,
                    padding: 2
                },
            },
            series: props.data.series
        });

        function debugPrint(something) {
            console.log(something)
        }

        return {
            debugPrint,
            option
        };
    },
});
</script>

<style scoped>
.chart {
    height: 50vh;
}
</style>
