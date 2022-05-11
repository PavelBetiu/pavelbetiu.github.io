<template>
  <div class="experiments container">
    <h2 class="subtitle is-3">Check out our cool experiments</h2>
    <div class="columns is-multiline">
      <div
        v-for="experiment in experiments"
        :experiment="experiment"
        :key="experiment.id"
        class="column is-one-quarter"
      >
        <router-link :to="'/experiment/' + experiment.id">
          <ExperimentCard :experiment="experiment" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import ExperimentCard from '@/components/ExperimentCard';
  export default {
    name: 'ExperimentsList',
    components: {
      ExperimentCard,
    },
    data() {
      return {
        experiment: {},
        experiments: [
          {
            id: 1,
            name: 'Multi-Document CNA',
            category: 'NLP',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
            featuredImage: require('@/assets/images/demo-cna.png'),
            images: [
              require('@/assets/images/demo-cna.png'),
            ],
          },
          {
            id: 2,
            name: 'Textual Complexity',
            category: 'NLP',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
            featuredImage: require('@/assets/images/demo-complexity.png'),
            images: [require('@/assets/images/demo-complexity.png')],
          },
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>
  .experiments {
    margin-top: 100px;
    text-align: center;
  }
</style>