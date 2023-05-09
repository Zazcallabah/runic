<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import RunicWord from '@/components/RunicWord.vue'
import * as con from '@/glyphs/consonants';
import * as vow from '@/glyphs/vowels';
import { ii, ih, eh, ey, uh, uhl, ah, oh, ar, ear,or, oo, ohw, er, ow, air, aj } from '@/glyphs/vowels';
import { sh, l, h, d, b, v, g, s, j, k, t, r, z, n, p, dj, tj, tdh, tfh, vuh, m, f } from '@/glyphs/consonants';
import { phonetic, flattenGlyphs, getGlyphKeys, type GlyphOrJoin } from '@/utils';
import { ipa, names } from '@/glyphs/phonetics';
import * as pageData from '@/glyphs/pages'

const current: Record<string, GlyphOrJoin[]> = {

}

const makeWord = (word: string, page: Record<string, GlyphOrJoin[]>): word => {
    const flat = flattenGlyphs(page[word])
    const keys = getGlyphKeys(flat)
    const phones = phonetic(keys, names)
    const ipastr = phonetic(keys, ipa)
    return { text: word, g: page[word], phonetic: phones.join(" "), ipa: ipastr.join(""), keys }
}
const makeWordsFromPage = (page: Record<string, GlyphOrJoin[]>): word[] => {
    return Object.keys(page).map((k) => { return makeWord(k, page) })
}

type word = {
    text: string;
    phonetic: string;
    ipa: string;
    keys: string[];
    g: GlyphOrJoin[];
}

type PageEntry = {
    name: string,
    page: word[],
    index: number
}
const filterOn = ref("")
const pageFilter = ref("0")
const pages = ref<PageEntry[]>([])
let ix = 1
for (const page in pageData) {
    pages.value.push({
        name: page,
        page: makeWordsFromPage(pageData[page as keyof typeof pageData]),
        index: ix,
    })
    ix++
}
const visiblePages = computed(() => {
    const pageFilterIndex = parseInt(pageFilter.value)
    const filteredPages = pageFilterIndex === 0 ? pages.value : pages.value.filter(p => p.index === pageFilterIndex)
    return filteredPages.map(p => {
        if (filterOn.value === "") {
            return p
        }
        return {
            name: p.name,
            index: p.index,
            page: p.page.filter(w => w.keys.includes(filterOn.value))
        }
    })
})
const currentWork = makeWordsFromPage(current)
const filters = Object.keys(names)
</script>

<template>
    <h2>Current:</h2>
    <p v-for="(w,i) in currentWork" :key="i">
        <RunicWord :size="50" :glyphs="w.g" /> {{ w.text }} [{{ w.phonetic }}] /{{ w.ipa }}/
    </p>
    <h2>Filter:</h2>
    <select v-model="filterOn">
        <option selected value="">show all</option>
        <option v-for="f in filters" :key="f" :value="f">{{ names[f] }}</option>
    </select>
    <p>
        <label>
            Page {{ pageFilter }}
            <input v-model="pageFilter" type="range" min="0" max="55" step="1">
        </label>
    </p>


    <h2>Pages:</h2>

    <section v-for="(p, i) in visiblePages" :key="i">
        <h3>{{ p.name }}</h3>
        <p v-for="(w, i2) in p.page" :key="i2">
            <RunicWord :size="50" :glyphs="w.g" /> {{ w.text }} [{{ w.phonetic }}] /{{ w.ipa }}/
        </p>
    </section>
</template>

<style scoped></style>
