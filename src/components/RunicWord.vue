<script setup lang="ts">
import {computed,toRefs} from "vue"
import RunicGlyph from './RunicGlyph.vue'

const props = defineProps<{glyphs:string[][],size?:number}>()
const {glyphs, size}=toRefs(props)
//const glyphs = computed(()=>{})
</script>

<template>
  <div>
    <RunicGlyph v-for="(g,i) in glyphs" :key="i" :size="size" :lines="g"/>
  </div>
</template>

<style scoped>
div{
  display: inline-block;
  padding-right: 1rem;
  background:white;
}
</style>
