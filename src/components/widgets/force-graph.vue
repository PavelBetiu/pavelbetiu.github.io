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
                text: 'Les Miserables',
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            legend: [{
                // selectedMode: 'single',
                data: props.data.categories.map(function (category) {
                    return category.name;
                }),
            }],
            series: [{
                name: 'Les Miserables',
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
                    repulsion: 100
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
    height: 100vh;
}
</style>
