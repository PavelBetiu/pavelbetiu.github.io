<template>
<b-card no-body>
  <b-card-body class="pt-0">
    <async-world-map class="map map-big"
                     :map-data="mapData"
                     :points="points">
    </async-world-map>
  </b-card-body>
</b-card>
</template>

<style>

</style>

<script>
import AsyncWorldMap from '@/components/widgets/async-world-map.vue';

    export default {
    components: {
        AsyncWorldMap
    },
    data() {
        return {
            mapData: {
                AUS: 760,
                BRA: 900,
                CAN: 120,
                DEU: 1300,
                FRA: 540,
                GBR: 690,
                GEO: 200,
                IND: 200,
                ROU: 600,
                RUS: 757,
                USA: 1800
            },
            points: [{
                    name: 'Brazil',
                    centered: 'BRA',
                },
                {
                    name: 'France',
                    centered: 'FRA',
                },
                {
                    name: 'Italy',
                    centered: 'ITA',
                },
                {
                    name: 'Oman',
                    centered: 'OMN',
                },
                {
                    name: 'Indonesia',
                    centered: 'IDN',
                },
                {
                    name: 'Romania',
                    centered: 'ROU',
                }
            ]
        };
    }
};
</script>
