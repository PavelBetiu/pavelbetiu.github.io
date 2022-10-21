<template>
  <h1>CSCL Results Component (TODO)</h1>
  <CircularGraph :data="data" />
</template>

<script>
import CircularGraph from '@/components/widgets/circular-graph.vue';
export default {
  props: ["data"],
  components: {
    CircularGraph,
  },
  data() {
    return {};
  },
};
</script>
