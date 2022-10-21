<template>
  <h1>CSCL Results Component (TODO)</h1>
  <CircularGraph :data="circularGraphInput" />
</template>

<script>
import CircularGraph from '@/components/widgets/circular-graph.vue';
import {convertToCircularGraphInput} from './cscl-converters'
export default {
  props: ["data"],
  components: {
    CircularGraph,
  },
  data() {
    return {};
  },
  created() {
    this.circularGraphInput = convertToCircularGraphInput(this.data);
  },
};
</script>
