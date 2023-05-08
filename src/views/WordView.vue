<script setup lang="ts">
import { ref, computed } from "vue"
import RunicWord from '@/components/RunicWord.vue'
import * as con from '@/glyphs/consonants';
import * as vow from '@/glyphs/vowels';
import { ih, i, eh, ey,uh, oh, ar,or, oo,ohw, er,ow ,air} from '@/glyphs/vowels';
import { sh, l, d, v, s, j,k, t, r, z,n,p, dj, tdh, vuh,m, f } from '@/glyphs/consonants';
import { phonetic,flattenGlyphs,getGlyphKeys, type GlyphOrJoin } from '@/utils';
import { ipa, names } from '@/glyphs/phonetics';

const filterOn = ref("")
const words: Record<string, GlyphOrJoin[]> = {
    fox: [[f, oh], k, s],
    shield: [[sh, ih], l, d],
    sword: [[s, or], d],

     up: [[uh,p]],
     doh: [[d,ow]],
     // left right down

     cards: [[k,ar],d,z],
     controls: [[k,uh],n,t,[r,ohw],l,z],
     potion:[[p,ohw],[sh,uh],n],
     take:[[t,ey],k],
     use:[[j,oo],z],
     roll:[[r,ohw],l],
     run:[[r,uh],n],
     talk:[[t,oh],k],
     focus:[[f,ohw],[k,uh],s],
     move:[[m,oo],vuh],

     is: [[i,z]],
     the: [[tdh, uh]],
     of: [[uh,vuh]],



     // guy inventory crucial
     // far shore
     // shadow

     // under for here hear are enough left special when that
     // found toy great gold have width you page statue praying
     // nothing water wide brave use adjust sign strange
     // ancient being yet item they was wisdom tool toy checkpoint
     // parry guard rare when so know not north war kindness certain
     // by item right mere inventory south
     // stolen device oubliette
     // but there are som weird critters

     // you are allowed

    secret: [[s, ih], k, [r, i], t],
    legend: [[l, eh], [dj, eh], n, d],
    softest: [[s, oh], f, [t, i], s, t],
    ruin: [[r, oo], [i, n]],
    rune: [[r, oo], n],
    seeker: [[s, ih], [k, er]],
    heir: [air],
    unkn: [con.unkn]
}

type word = {
    text: string;
    phonetic: string;
    ipa: string;
    keys: string[];
    g: GlyphOrJoin[];
}

const makeWord = (w: string): word => {
    const flat = flattenGlyphs(words[w])
    const keys = getGlyphKeys(flat)
    const phones = phonetic(keys,names)
    const ipastr = phonetic(keys,ipa)
    return { text: w, g: words[w], phonetic: phones.join(" "), ipa: ipastr.join(""), keys }
}
const wordList: word[] = Object.keys(words).map(makeWord)
const filteredWords = computed(() => {
    if (filterOn.value === "") {
        return wordList
    }
    return wordList.filter(w => w.keys.includes(filterOn.value))
})
const filters = Object.keys(names)
</script>

<template>
    <h3>Filter:</h3>
    <select v-model="filterOn">
      <option selected value="">show all</option>
      <option v-for="f in filters" :key="f" :value="f">{{ names[f] }}</option>
    </select>

    <h3>Words:</h3>
    <p v-for="(w, i) in filteredWords" :key="i">
        <RunicWord :size="50" :glyphs="w.g" /> {{ w.text }} [{{ w.phonetic }}] /{{w.ipa}}/
    </p>
</template>

<style scoped></style>
