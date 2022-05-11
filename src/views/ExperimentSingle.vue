<template>
  <div class="experiment-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ experiment.name }}</h1>
        </div>
      </div>
    </section>
    <section class="experiment-content">
      <div class="container">
        <p class="is-size-4 description">{{ experiment.description }}</p>
        <div class="experiment-images columns is-multiline has-text-centered">
          <div
            v-for="image in experiment.images"
            :key="image.id"
            class="column is-one-third"
          >
            <img :src="image" :alt="experiment.name" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ExperimentSingle",
  data() {
    return {
      experiments: [
        {
          id: 1,
          name: "Multi-Document CNA",
          category: "NLP",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.",
          featuredImage:
            "https://readerbench.com/assets/images/demo-document-analysis.png",
          images: [
            "https://readerbench.com/assets/images/demo-document-analysis.png",
          ],
        },
        {
          id: 2,
          name: "Textual Complexity",
          category: "NLP",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.",
          featuredImage:
            "https://readerbench.com/assets/images/demo_textual_complexity.png",
          images: [
            "https://readerbench.com/assets/images/demo_textual_complexity.png",
          ],
        },
      ],
      experiment: {},
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let experiment = this.experiments.find(
      (experiment) => experiment.id === ID
    );
    this.experiment = experiment;
  },
};
</script>