<script setup lang="ts">
import { lerp, type Glyph } from '@/utils';
import { toRefs, computed } from 'vue';

interface Props {
  base?: boolean;
  lines: Glyph;
  size: number;
}
const props = withDefaults(defineProps<Props>(), {
  base: true,
  size: 100,
})

const { lines, base, size } = toRefs(props)

const k1 = computed(() => lines.value.includes("k1"))
const k2 = computed(() => lines.value.includes("k2"))
const k3 = computed(() => lines.value.includes("k3"))
const k4 = computed(() => lines.value.includes("k4"))
const k5 = computed(() => lines.value.includes("k5"))
const k6 = computed(() => lines.value.includes("k6"))
const v1 = computed(() => lines.value.includes("v1"))
const v2 = computed(() => lines.value.includes("v2"))
const v3 = computed(() => lines.value.includes("v3"))
const v4 = computed(() => lines.value.includes("v4"))
const v5 = computed(() => lines.value.includes("v5"))
const inv = computed(() => lines.value.includes("inv"))
const showBase = computed(() => base.value ?? true)

const height = size.value
const scale = height/600;//computed(() => size.value / 600)
const width = scale*360;
const strokeWidth = lerp(height,600,50,5,2)
const invR = lerp(height,600,50,20,3)

//const width = computed(() => scale.value * 360)

//    1
//  /   \
// 0     2
// |
//54-----3
const upperShellPoints = [
  [strokeWidth/2, scale*135],
  [scale*182, scale*40],
  [scale*362, scale*135],
  [scale*360, scale*310],
  [strokeWidth/2, scale*310],
  [scale*0, scale*310]
]

// 0
// |
// 1     3
//  \   /
//    2
const lowerShellPoints = [
  [strokeWidth/2,scale* 365],
  [strokeWidth/2,scale* 460],
  [scale*182,scale* 555],
  [scale*362,scale* 460],
]

//    0
//    |
//    1
//    |
//    2
const midPoints = [
  [scale*182,scale* 230],
  [scale*182,scale* 310],
  [scale*182,scale* 365],
]

const paths = {
  base: `M ${upperShellPoints[5][0]} ${upperShellPoints[5][1]} L ${upperShellPoints[3][0]} ${upperShellPoints[3][1]}`,
  v1: `M ${lowerShellPoints[0][0]} ${lowerShellPoints[0][1]} L ${lowerShellPoints[1][0]} ${lowerShellPoints[1][1]} M ${upperShellPoints[0][0]} ${upperShellPoints[0][1]} L ${upperShellPoints[4][0]} ${upperShellPoints[4][1]}`,
  v2: `M ${upperShellPoints[0][0]} ${upperShellPoints[0][1]} L ${upperShellPoints[1][0]} ${upperShellPoints[1][1]}`,
  v3: `M ${upperShellPoints[2][0]} ${upperShellPoints[2][1]} L ${upperShellPoints[1][0]} ${upperShellPoints[1][1]}`,
  v4: `M ${lowerShellPoints[3][0]} ${lowerShellPoints[3][1]} L ${lowerShellPoints[2][0]} ${lowerShellPoints[2][1]}`,
  v5: `M ${lowerShellPoints[1][0]} ${lowerShellPoints[1][1]} L ${lowerShellPoints[2][0]} ${lowerShellPoints[2][1]}`,

  k1: `M ${upperShellPoints[0][0]} ${upperShellPoints[0][1]} L ${midPoints[0][0]} ${midPoints[0][1]}`,
  k2: `M ${upperShellPoints[1][0]} ${upperShellPoints[1][1]} L ${midPoints[0][0]} ${midPoints[0][1]}`,
  k3: `M ${upperShellPoints[2][0]} ${upperShellPoints[2][1]} L ${midPoints[0][0]} ${midPoints[0][1]}`,
  kx: `M ${midPoints[0][0]} ${midPoints[0][1]} L ${midPoints[1][0]} ${midPoints[1][1]}`,
  k4: `M ${lowerShellPoints[3][0]} ${lowerShellPoints[3][1]} L ${midPoints[2][0]} ${midPoints[2][1]}`,
  k5: `M ${lowerShellPoints[2][0]} ${lowerShellPoints[2][1]} L ${midPoints[2][0]} ${midPoints[2][1]}`,
  k6: `M ${lowerShellPoints[1][0]} ${lowerShellPoints[1][1]} L ${midPoints[2][0]} ${midPoints[2][1]}`,
}

</script>
<template>
  <svg :width="width" :height="height" :view-box="`0 0 ${width} ${height}`" xmlns="http://www.w3.org/2000/svg">
    <g :class="{ hide: !k1 }">
      <path id="k1" :d="paths.k1" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !k2 }">
      <path id="k2" :d="paths.k2" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !k3 }">
      <path id="k3" :d="paths.k3" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !k3 && !k2 && !k1 }">
      <path id="kx" :d="paths.kx" stroke="black" :stroke-width="strokeWidth" />
    </g>

    <g :class="{ hide: !k4 }">
      <path id="k4" :d="paths.k4" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !k5 }">
      <path id="k5" :d="paths.k5" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !k6 }">
      <path id="k6" :d="paths.k6" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>

    <g :class="{ hide: !v1 }">
      <path id="v1" :d="paths.v1" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !v2 }">
      <path id="v2" :d="paths.v2" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !v3 }">
      <path id="v3" :d="paths.v3" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !v4 }">
      <path id="v4" :d="paths.v4" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !v5 }">
      <path id="v5" :d="paths.v5" stroke-linecap="round" stroke="black" :stroke-width="strokeWidth" />
    </g>
    <g :class="{ hide: !inv }">
      <circle id="inv" :cx="lowerShellPoints[2][0]" :cy="lowerShellPoints[2][1]" :r="invR" stroke="black"
        :stroke-width="strokeWidth" fill="white" />
    </g>
    <g :class="{ hide: !showBase }">
      <path id="base" :d="paths.base" stroke="gray" :stroke-width="strokeWidth" />
    </g>
  </svg>
</template>

<style scoped>
div {
  display: inline-block;
}

svg {
  background-color: silver;
}

.hide {
  display: none;
}
</style>
