<template>
<v-chart class="chart" :option="option" />
{{debugPrint(option.legend[0].data)}}
</template>

<script>
import {
    use
} from 'echarts/core';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import {
    GraphChart,
} from 'echarts/charts';
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

import CircularGraphInput from './circular-graph-input';

use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GraphChart,
    CanvasRenderer
]);

export default defineComponent({
    name: 'CircularGraph',
    props: {
        data: CircularGraphInput
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
                text: 'CSCL Circular Graph',
                subtext: 'Circular layout',
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            legend: [{
                data: props.data.legendData
            }],
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: 'CSCL Circular Graph',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: props.data.nodes,
                links: props.data.links,
                categories: props.data.categories,
                roam: true,
                label: {
                    position: 'right',
                    formatter: '{b}'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }],
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

<style scoped>
.chart {
    height: 100vh;
}
</style>