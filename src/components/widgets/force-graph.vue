<template>
<v-chart class="chart" :option="option" />
</template>

<script>
import {
    use
} from 'echarts/core';
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponent,
    TooltipComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import {
    GraphChart,
    GraphSeriesOption
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
import {
    ForceGraphInput
} from "./force-graph-input";

use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GraphChart,
    CanvasRenderer
]);

export default defineComponent({
    name: 'ForceGraph',
    props: {
        data: ForceGraphInput
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
                text: 'CSCL Forced Graph',
                subtext: '',
                top: 'top',
                left: 'left'
            },
            tooltip: {},
            legend: [{
                data: props.data.categories.map(function (category) {
                    return category.name;
                }),
            }],
            series: [{
                name: '',
                type: 'graph',
                layout: 'force',
                data: props.data.nodes,
                links: props.data.links,
                categories: props.data.categories,
                roam: true,
                label: {
                    position: 'left'
                },
                force: {
                    // Edge length is equal to the edge weight
                    edgeLength: props.data.links.map(function (link) {
                        return link.value;
                    }),
                    // The greater the repulsion, the farther apart the nodes
                    repulsion: props.data.links.map(function (link) {
                        return 1 / link.value * 100; // Repulsion is inversely proportional to the edge weight (similarity coefficient)
                    }),
                    gravity: 0.1
                },
                zoom: 2,
                edgeSymbol: ['none', 'arrow'],
                // Enable node dragging
                draggable: true,
                // Some settings regarding emphasis of nodes and edges
                emphasis: {
                    disabled: false,
                    // On mouse hover, the node and adjacent edges will be highlighted
                    focus: 'adjacency',
                    edgeLabel: {
                        show: true,
                        formatter: '{b}: {c}'
                    },
                    lineStyle: {
                        color: "rgba(144, 0, 255, 1)",
                        width: 2
                    }
                }
            }]
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
    height: 75vh;
}
</style>
