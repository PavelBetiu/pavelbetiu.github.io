<template>
  <span>{{ displayValue }}<span v-if="suffix">{{ suffix }}</span></span>
</template>

<script>
export default {
  name: 'AnimatedCounter',
  props: {
    end: { type: Number, required: true },
    duration: { type: Number, default: 1200 },
    suffix: { type: String, default: '' }
  },
  data() {
    return {
      start: 0,
      displayValue: 0,
      hasAnimated: false,
      observer: null,
    };
  },
  mounted() {
    // IntersectionObserver to trigger once when visible
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animate();
          if (this.observer) this.observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    this.observer.observe(this.$el);
  },
  methods: {
    animate() {
      const startTime = performance.now();
      const animateFrame = (now) => {
        const progress = Math.min((now - startTime) / this.duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        this.displayValue = Math.floor(this.start + (this.end - this.start) * eased);
        if (progress < 1) {
          requestAnimationFrame(animateFrame);
        }
      };
      requestAnimationFrame(animateFrame);
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  min-width: 2ch;
}
</style>
