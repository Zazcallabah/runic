<script setup lang="ts">
import { toRefs } from 'vue';
interface Props {
  base?: boolean;
  inv?: boolean;
  k1?: boolean;
  k2?: boolean;
  k3?: boolean;
  k4?: boolean;
  k5?: boolean;
  k6?: boolean;
  v1?: boolean;
  v2?: boolean;
  v3?: boolean;
  v4?: boolean;
  v5?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  base: true,
})

const { k1, k2, k3, k4, k5, k6, v1, v2, v3, v4, v5, inv, base } = toRefs(props)

</script>
<template>
  <svg width="360" height="600" view-box="0 0 360 600" xmlns="http://www.w3.org/2000/svg">
    <g :class="{ hide: !k1 }">
      <path id="k1" d="M 2 135 L 180 230 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !k2 }">
      <path id="k2" d="M 180 40 L 180 310 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !k3 }">
      <path id="k3" d="M 358 135 L 180 230 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !k4 }">
      <path id="k4" d="M 358 460 L 180 365 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !k5 }">
      <path id="k5" d="M 180 555 L 180 365 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !k6 }">
      <path id="k6" d="M 2 460 L 180 365 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>

    <g :class="{ hide: !v1 }">
      <path id="v1" d="M 2 460 L 2 365 M 2 310 L 2 135 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !v2 }">
      <path id="v2" d="M 2 135 L 180 40 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !v3 }">
      <path id="v3" d="M 180 40 L 358 135" stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !v4 }">
      <path id="v4" d="M 180 555 L 358 460 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !v5 }">
      <path id="v5" d="M 180 555 L 2 460 " stroke-linecap="round" stroke="black" stroke-width="4" />
    </g>
    <g :class="{ hide: !inv }">
      <circle id="inv" cx="180" cy="565" r="20" stroke="black" stroke-width="4" fill="white" />
    </g>
    <g :class="{ hide: !base }">
      <path id="base" d="M 0 310 L 360 310 " stroke="gray" stroke-width="4" />
    </g>

  </svg>
</template>

<style scoped>
svg {
  background-color: white;
}

.hide {
  display: none;
}
</style>
