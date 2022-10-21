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
                    category: 0,
                    id: 'Marius',
                    label: {
                        show: true
                    },
                    name: 'Marius',
                    symbolSize: 240,
                    value: 10,
                }, {
                    category: 1,
                    id: 'Laureline',
                    label: {
                        show: true
                    },
                    name: 'Laureline',
                    symbolSize: 240,
                    value: 10,
                }, {
                    category: 1,
                    id: 'Cruchot',
                    label: {
                        show: true
                    },
                    name: 'Cruchot',
                    symbolSize: 240,
                    value: 10,
                }],
                links: [{
                    source: 'Marius',
                    target: 'Laureline'
                }, {
                    source: 'Marius',
                    target: 'Cruchot'
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

<style scoped>
.chart {
    height: 100vh;
}
</style>