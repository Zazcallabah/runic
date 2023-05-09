<script setup lang="ts">
import RunicWord from '@/components/RunicWord.vue'
import ColoredRunicGlyph from '@/components/ColoredRunicGlyph.vue'
import { k,b,p,l,sh,s,d } from '@/glyphs/consonants';
import { ii,er } from '@/glyphs/vowels';
import {join} from "@/utils"
</script>

<template>
    <h2>Consonants</h2>
    <RunicWord :glyphs="[l]"/>
    <p>L can be found in</p>
    <RunicWord :size="50" :glyphs="[join(sh,ii),l,d]"/> (shield)<br>
    <RunicWord :glyphs="[b]"/>
    <RunicWord :glyphs="[p]"/>

    <p> then this</p>
    <RunicWord :glyphs="[k,b,p]"/>
    <RunicWord :glyphs="[join(k,['v1']),join(['v2'],b),p]"/>

    <p></p>
    <ColoredRunicGlyph stroke="darkgreen" :lines="join(s,ii)"/>
    <ColoredRunicGlyph stroke="darkgreen" :lines="join(k,er)"/>
    <ColoredRunicGlyph stroke="darkgreen" :lines="join(er,k)"/>
</template>

<style scoped>
</style>
