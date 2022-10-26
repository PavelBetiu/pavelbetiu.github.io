<template>
  <div class="col-md-4 mt-md-0"
    v-for="experiment in experiments"
    :experiment="experiment"
    :key="experiment.key"
    >
      <router-link :to="'/experiment/' + experiment.key">
          <ExperimentCard :experiment="experiment" />
        </router-link>
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
            key: 'cscl',
            name: 'CSCL',
            category: 'NLP',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.',
            featuredImage: require('@/assets/images/demo_cscl.png'),
            images: [
              require('@/assets/images/demo_cscl.png'),
            ],
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
