<template>
<b-card no-body>
    <b-card-body class="pt-0">
        <async-world-map class="map map-big" :map-data="mapData" :points="points">
        </async-world-map>
    </b-card-body>
</b-card>
</template>

<style>

</style>

<script>
export default {
    name: 'AsyncWorldMap',
    props: {
        mapData: {
            type: Object,
            required: true
        },
        points: {
            type: Array,
            required: true
        }
    }
};
</script>
