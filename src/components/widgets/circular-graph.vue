<template>
<v-chart class="chart" :option="option" />
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
        data: undefined
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
                text: 'Les Miserables',
                subtext: 'Circular layout',
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            legend: [{
                data: ['a', 'b']
            }],
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: [{
                    name: 'Marius',
                    category: 0,
                    id: 'Marius',
                    symbolSize: 20,
                    value: 10,
                }, {
                    name: 'Laureline',
                    category: 1,
                    id: 'Laureline',
                    symbolSize: 20,
                    value: 10,
                }, {
                    name: 'Cruchot',
                    category: 1,
                    id: 'Cruchot',
                    symbolSize: 20,
                    value: 10,
                }],
                links: [{
                    source: 'Marius',
                    target: 'Laureline',
                    value: 5
                }, {
                    source: 'Marius',
                    target: 'Cruchot',
                    value: 5
                }],
                categories: [{
                    name: 'a'
                }, {
                    name: 'b'
                }],
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
