<template>
<v-chart class="chart" :option="option" autoresize/>
</template>

<script>
import {
    use
} from 'echarts/core';
import {
    GraphicComponent,
    GraphicComponentOption
} from 'echarts/components';
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
    GraphicComponent,
    CanvasRenderer
]);

export default defineComponent({

    name: 'HomePageTitle',

    components: {
        VChart
    },

    provide: {
        [THEME_KEY]: 'light',
    },

    setup() {
        const option = ref({
            graphic: {
                elements: [{
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: 'ReaderBench',
                        fontSize: 80,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#000',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 3000,
                        loop: true,
                        keyframes: [{
                                percent: 0.7,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                // Stop for a while.
                                percent: 0.8,
                                style: {
                                    fill: 'transparent'
                                }
                            },
                            {
                                percent: 1,
                                style: {
                                    fill: 'black'
                                }
                            }
                        ]
                    }
                }]
            }
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
    height: 10vh;
}
</style>
