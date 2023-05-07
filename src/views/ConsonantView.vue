<script setup lang="ts">
import RunicWord from '@/components/RunicWord.vue'
import { k,b,p,l,sh,d } from '@/glyphs/consonants';
import { ih } from '@/glyphs/vowels';
import {join} from "@/utils"
</script>

<template>
    <h2>Consonants</h2>
    <RunicWord :glyphs="[l]"/>
    <p>L can be found in</p>
    <RunicWord :size="50" :glyphs="[join(sh,ih),l,d]"/> (shield)<br>
    <RunicWord :glyphs="[b]"/>
    <RunicWord :glyphs="[p]"/>

    <p> then this</p>
    <RunicWord :glyphs="[k,b,p]"/>
    <RunicWord :glyphs="[join(k,['v1']),join(['v2'],b),p]"/>
</template>

<style scoped>
</style>
