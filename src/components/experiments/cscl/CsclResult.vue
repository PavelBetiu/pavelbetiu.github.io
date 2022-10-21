<template>
  <h1>CSCL Results Component (TODO)</h1>
  <ForceGraph :data='forceGraphInput'/>
</template>

<script>
import ForceGraph from '../../widgets/force-graph.vue'
import { convertToForceGraphInput } from "./cscl-converters";

export default {
  props: ["data"],
  components: {
    ForceGraph,
  },
  data() {
    return {};
  },
  created() {
    this.forceGraphInput = convertToForceGraphInput(this.data);
  },
  
};
</script>
