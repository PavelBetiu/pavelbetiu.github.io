<template>
  <div :class="['icon-orb', `icon-orb--${variant}`]" :style="orbStyle">
    <div class="icon-orb__gradient"></div>
    <div class="icon-orb__ring"></div>
    <div class="icon-orb__sheen"></div>
    <div class="icon-orb__inner"></div>
    <i :class="['fas', iconClass, 'icon-orb__icon']"></i>
    <div v-if="particles" class="icon-orb__particle p1"></div>
    <div v-if="particles" class="icon-orb__particle p2"></div>
    <div v-if="particles" class="icon-orb__particle p3"></div>
  </div>
</template>

<script>
export default {
  name: 'IconOrb',
  props: {
    variant: { type: String, required: true },
    size: { type: Number, default: 80 }
  },
  computed: {
    config() {
      const map = {
        about: {
          icon: 'fa-user-astronaut',
          gradient: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
          ring: 'rgba(255,255,255,0.55)',
          particles: true
        },
        projects: {
          icon: 'fa-diagram-project',
            gradient: 'linear-gradient(135deg,#ff9966 0%,#ff5e62 100%)',
          ring: 'rgba(255,255,255,0.6)',
          particles: true
        },
        contact: {
          icon: 'fa-paper-plane',
          gradient: 'linear-gradient(135deg,#06beb6 0%,#48b1bf 100%)',
          ring: 'rgba(255,255,255,0.55)',
          particles: true
        },
        cloud: {
          icon: 'fa-cloud',
          gradient: 'linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)',
          ring: 'rgba(255,255,255,0.5)',
          particles: false
        },
        devops: {
          icon: 'fa-gears',
          gradient: 'linear-gradient(135deg,#667eea 0%,#38b2ac 100%)',
          ring: 'rgba(255,255,255,0.5)',
          particles: false
        },
        programming: {
          icon: 'fa-code',
          gradient: 'linear-gradient(135deg,#42e695 0%,#3bb2b8 100%)',
          ring: 'rgba(255,255,255,0.55)',
          particles: false
        },
        ml: {
          icon: 'fa-brain',
          gradient: 'linear-gradient(135deg,#f6d365 0%,#fda085 100%)',
          ring: 'rgba(255,255,255,0.55)',
          particles: false
        }
      };
      return map[this.variant] || map['about'];
    },
    iconClass() { return this.config.icon; },
    particles() { return this.config.particles; },
    orbStyle() {
      return {
        '--orb-size': this.size + 'px',
        '--orb-gradient': this.config.gradient,
        '--orb-ring-color': this.config.ring
      };
    }
  }
};
</script>

<style scoped>
.icon-orb {
  width: var(--orb-size);
  height: var(--orb-size);
  position: relative;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  cursor: default;
  transition: transform .6s cubic-bezier(.175,.885,.32,1.275), box-shadow .5s ease;
}

.icon-orb__gradient {
  position: absolute;
  inset: 0;
  background: var(--orb-gradient);
  border-radius: 50%;
  box-shadow: 0 12px 30px -6px rgba(0,0,0,.45), 0 0 0 4px rgba(255,255,255,.15) inset;
}

.icon-orb__inner {
  position: absolute;
  inset: 10%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), rgba(255,255,255,.05));
  border-radius: 50%;
  filter: blur(1px);
}

.icon-orb__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--orb-ring-color) inset, 0 0 12px rgba(255,255,255,.35);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: .8;
}

.icon-orb__sheen {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at 25% 25%, rgba(255,255,255,.55), transparent 60%);
  opacity: 0;
  transform: scale(.6) rotate(0deg);
  transition: opacity .8s ease, transform .9s ease;
}

.icon-orb__icon {
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: calc(var(--orb-size) * .42);
  text-shadow: 0 4px 14px rgba(0,0,0,.35);
  animation: iconFloat 5s ease-in-out infinite;
}

@keyframes iconFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-6%); }
}

.icon-orb__particle {
  position: absolute;
  width: 10px; height: 10px;
  background: rgba(255,255,255,.65);
  border-radius: 50%;
  filter: blur(1px);
  animation: particleDrift 6s linear infinite;
}
.icon-orb__particle.p1 { top: 8%; left: 14%; animation-delay: .2s; }
.icon-orb__particle.p2 { bottom: 12%; right: 18%; animation-delay: 1.1s; }
.icon-orb__particle.p3 { top: 18%; right: 12%; animation-delay: 2.3s; }

@keyframes particleDrift {
  0% { transform: translateY(0) scale(1); opacity: .9; }
  50% { transform: translateY(-8px) scale(1.15); opacity: .6; }
  100% { transform: translateY(0) scale(1); opacity: .9; }
}

.icon-orb:hover {
  transform: translateY(-10px) scale(1.06) rotate(2deg);
  box-shadow: 0 18px 45px -8px rgba(0,0,0,.55), 0 0 0 6px rgba(255,255,255,.12) inset;
}
.icon-orb:hover .icon-orb__sheen { opacity: 1; transform: scale(1) rotate(25deg); }
.icon-orb:hover .icon-orb__ring { opacity: 1; }
</style>
