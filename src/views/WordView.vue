<script setup lang="ts">
import RunicWord from '@/components/RunicWord.vue'
import * as con from '@/glyphs/consonants';
import * as vow from '@/glyphs/vowels';
import { ih, i, eh, uh, oh, or, oo, er } from '@/glyphs/vowels';
import { sh, l, d, s, k, t, r, n, dj, tdh, f } from '@/glyphs/consonants';
import { phonetic, type GlyphOrJoin } from '@/utils';
import { names } from '@/glyphs/phonetics';

const words: Record<string, GlyphOrJoin[]> = {
    fox: [[f, oh], k, s],
    shield: [[sh, ih], l, d],
    sword: [[s, or], d],
    secret: [[s, ih], k, [r, i], t],
    legend: [[l, eh], [dj, eh], n, d],
    the: [[tdh, uh]],
    softest: [[s, oh], f, [t, i], s, t],
    ruin: [[r, oo], [i, n]],
    rune: [[r, oo], n],
    seeker: [[s, ih], [k, er]],
}

type word = {
    text: string;
    phonetic: string
    g: GlyphOrJoin[];
}

const wordList: word[] = Object.keys(words).map(w => { return { text: w, g: words[w], phonetic:phonetic(words[w],names).join(" ") } })
</script>

<template>
    <p v-for="(w, i) in wordList" :key="i">
        <RunicWord :size="50" :glyphs="w.g" /> {{ w.text }} [{{ w.phonetic }}]
    </p>
</template>

<style scoped></style>
