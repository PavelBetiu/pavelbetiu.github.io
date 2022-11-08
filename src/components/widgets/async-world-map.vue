<template>
<div class="hello card" ref="chartdiv">
</div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

am4core.useTheme(am4themes_animated);

export default {
    name: 'AsyncWorldMap',
    mounted() {
        let chart = am4core.create(this.$refs.chartdiv, am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#6B728E");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#404258");

        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];

        // Add some data
        polygonSeries.data = [{
            "id": "US",
            "name": "United States",
            "value": 100,
            "fill": am4core.color("#80489C")
        }, {
            "id": "FR",
            "name": "France",
            "value": 50,
            "fill": am4core.color("#80489C")
        },
        {
            "id": "DE",
            "name": "Germany",
            "value": 50,
            "fill": am4core.color("#80489C")
        },
        {
            "id": "IT",
            "name": "Italy",
            "value": 50,
            "fill": am4core.color("#80489C")
        },
        {
            "id": "RO",
            "name": "Romania",
            "value": 50,
            "fill": am4core.color("#80489C")
        }];

        // Bind "fill" property to "fill" key in data
        polygonTemplate.propertyFields.fill = "fill";

        // Add line series
        var lineSeries = chart.series.push(new am4maps.MapLineSeries());
        lineSeries.data = [{
            "multiGeoLine": [
                [{
                        "latitude": 41.902782,
                        "longitude": 12.496366,
                    },
                    {
                        "latitude": 44.439663,
                        "longitude": 26.096306
                    }
                ],
                [{
                        "latitude": 44.439663,
                        "longitude": 26.096306
                    },
                    {
                        "latitude": 48.856614,
                        "longitude": 2.352222
                    }
                ],
                [{
                        "latitude": 44.439663,
                        "longitude": 26.096306
                    },
                    {
                        "latitude": 48.137154,
                        "longitude": 11.576124
                    }
                ],
                [{
                        "latitude": 44.439663,
                        "longitude": 26.096306
                    },
                    {
                        "latitude": 45.171547,
                        "longitude": 5.722387
                    }
                ],
                [{
                        "latitude": 44.439663,
                        "longitude": 26.096306
                    },
                    {
                        "latitude": 36.174465,
                        "longitude": -86.767960
                    }
                ],
                [{
                        "latitude": 44.439663,
                        "longitude": 26.096306
                    },
                    {
                        "latitude": 33.448376,
                        "longitude": -112.074036
                    }
                ]
            ]
        }];

        // Create image series
        var imageSeries = chart.series.push(new am4maps.MapImageSeries());

        // Create a circle image in image series template so it gets replicated to all new images
        var imageSeriesTemplate = imageSeries.mapImages.template;
        var circle = imageSeriesTemplate.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color("#B27799");
        circle.stroke = am4core.color("#FFFFFF");
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = "{title}";

        // Set property fields
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        // Add data for the three cities
        imageSeries.data = [{
                "latitude": 48.856614,
                "longitude": 2.352222,
                "title": "Paris"
            },
            {
                "latitude": 44.439663,
                "longitude": 26.096306,
                "title": "Bucharest"
            },
            {
                "latitude": 41.902782,
                "longitude": 12.496366,
                "title": "Rome"
            },
            {
                "latitude": 48.137154,
                "longitude": 11.576124,
                "title": "Munich"
            },
            {
                "latitude": 45.171547,
                "longitude": 5.722387,
                "title": "Grenoble"
            },
            {
                "latitude": 36.174465,
                "longitude": -86.767960,
                "title": "Nashville"
            },
            {
                "latitude": 33.448376,
                "longitude": -112.074036,
                "title": "Phoenix"
            }
        ];
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    width: 76%;
    height: 500px;
}
</style>
