<script setup lang="ts">
import { computed, toRefs } from "vue"
import { mergeGlyphs, type Glyph, type GlyphOrJoin } from "@/utils"
import RunicGlyph from './RunicGlyph.vue'

const props = defineProps<{ glyphs: GlyphOrJoin[], size?: number }>()
const { glyphs, size } = toRefs(props)

const mergedGlyphs = computed((): Glyph[] => { return mergeGlyphs(glyphs.value) })
</script>

<template>
  <div>
    <RunicGlyph v-for="(g, i) in mergedGlyphs" :key="i" :size="size" :lines="g" />
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  padding-right: 1rem;
  background: white;
}
</style>
