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
    VisualMapComponent,
    LegendComponent,
} from 'echarts/components';
import {
    LineChart,
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
import StackedLineGradientGraphInput from './stacked-line-gradient-graph-input';

use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    VisualMapComponent,
    LegendComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition
]);

export default defineComponent({

    name: 'StackedLineGradientGraph',
    props: {
        data: StackedLineGradientGraphInput
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
                text: 'Contributions importance',
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '7%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    restore: {},
                    dataZoom: {
                        show: true
                    },
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'value',
                name: 'Contribution ID',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 16,
                    padding: 10
                },
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    showSymbol: false,
                    name: 'Importance',
                    type: 'line',
                    data: props.data.importance,
                    emphasis: {
                        disabled: true
                    }
                },
                {
                    showSymbol: false,
                    name: 'Social KB',
                    type: 'line',
                    data: props.data.social_kb,
                    emphasis: {
                        disabled: true
                    }
                },
                {
                    showSymbol: false,
                    name: 'In-degree',
                    type: 'line',
                    data: props.data.in_degree,
                    emphasis: {
                        disabled: true
                    }
                },
                {
                    showSymbol: false,
                    name: 'Out-degree',
                    type: 'line',
                    data: props.data.out_degree,
                }
            ]
        });

        function debugPrint(something) {
            console.log(something)
        }

        return {
            debugPrint,
            option
        };
    }
});
</script>

<style>
.chart {
    height: 50vh;
}
</style>
