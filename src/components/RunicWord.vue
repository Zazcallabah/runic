<script setup lang="ts">
import RunicGlyph from './RunicGlyph.vue'
</script>

<template>
    <RunicGlyph :v2="true" :v3="true" :v4="true" :v5="true" />
    <RunicGlyph :k1="true" :k3="true" :k5="true" />
</template>

<style scoped>
RunicGlyph {
  width: 100px;
}
</style>
