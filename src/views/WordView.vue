<script setup lang="ts">
import RunicWord from '@/components/RunicWord.vue'
import { join } from "@/utils"
import * as con from '@/glyphs/consonants';
import * as vow from '@/glyphs/vowels';
import { ih, i, eh, uh, oh, or,oo,er } from '@/glyphs/vowels';
import { sh, l, d, s, k, t, r, n, dj, tdh, f } from '@/glyphs/consonants';

const words: Record<string, any[][]> = {
    fox: [[f, oh], k, s],
    shield: [[sh, ih], l, d],
    sword: [[s, or], d],
    secret: [[s, ih], k, [r, i], t],
    legend: [[l, eh], [dj, eh], n, d],
    the: [[tdh, uh]],
    softest: [[s, oh], f, [t, i], s, t],
    ruin: [[r,oo],[i,n]],
    seeker:[[s,ih],[k,er]],
}



type word = {
    text: string;
    g: string[][];
}

const merge = (glyphs: any[][]) => {
    const r = []
    for (const g of glyphs) {
        const em = g[0]
        if (typeof em === "string") {
            r.push(g)
        } else {
            r.push(join(g[0], g[1]))
        }
    }
    return r
}

const wordList: word[] = Object.keys(words).map(w => { return { text: w, g: merge(words[w]) } })
</script>

<template>
    <p v-for="(w, i) in wordList" :key="i">
        <RunicWord :size="50" :glyphs="w.g" /> ({{ w.text }})
    </p>
</template>

<style scoped></style>
