<script setup lang="ts">
import * as con from '@/glyphs/consonants'
import * as vow from '@/glyphs/vowels'
import RunicWord from "./components/RunicWord.vue";
</script>

<template>
  <div class="side">
    <div>
    Vowels
    <p>
      <RunicWord :size="50" :glyphs="[vow.ey]"/>
      <RunicWord :size="50" :glyphs="[vow.oy]"/>
      <RunicWord :size="50" :glyphs="[vow.aj]"/>
      <RunicWord :size="50" :glyphs="[vow.ow]"/><br>
      <pre>Ey    Oy    Aj    Ow</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[vow.er]"/>
      <RunicWord :size="50" :glyphs="[vow.air]"/>
      <RunicWord :size="50" :glyphs="[vow.or]"/>
      <RunicWord :size="50" :glyphs="[vow.ear]"/><br>
      <pre>Er    Air   Or    Ear</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[vow.ii]"/>
      <RunicWord :size="50" :glyphs="[vow.uh]"/>
      <RunicWord :size="50" :glyphs="[vow.ar]"/><br>
      <pre>Ii    Uh    Ar</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[vow.ah]"/>
      <RunicWord :size="50" :glyphs="[vow.eh]"/>
      <RunicWord :size="50" :glyphs="[vow.ih]"/>
      <RunicWord :size="50" :glyphs="[vow.oh]"/>
      <pre>Ah    Eh    Ih    Oh</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[vow.ohw]"/>
      <RunicWord :size="50" :glyphs="[vow.oo]"/>
      <RunicWord :size="50" :glyphs="[vow.uu]"/>
      <pre>Ohw    Oo    Uu</pre>
    </p>
  </div>

  <div>
    Consonants
    <p>
      <RunicWord :size="50" :glyphs="[con.p]"/>
      <RunicWord :size="50" :glyphs="[con.b]"/>
      <RunicWord :size="50" :glyphs="[con.dj]"/>
      <RunicWord :size="50" :glyphs="[con.tj]"/><br>
      <pre> p    b     dj    tj</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[con.t]"/>
      <RunicWord :size="50" :glyphs="[con.d]"/>
      <RunicWord :size="50" :glyphs="[con.m]"/>
      <RunicWord :size="50" :glyphs="[con.v]"/><br>
      <pre> t    d     m     v</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[con.k]"/>
      <RunicWord :size="50" :glyphs="[con.vh]"/>
      <RunicWord :size="50" :glyphs="[con.g]"/>
      <RunicWord :size="50" :glyphs="[con.f]"/><br>
      <pre> k    vh   g     f</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[con.h]"/>
      <RunicWord :size="50" :glyphs="[con.j]"/>
      <RunicWord :size="50" :glyphs="[con.r]"/>
      <RunicWord :size="50" :glyphs="[con.ng]"/>
      <br>
      <pre> h    j     r    ng</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[con.n]"/>
      <RunicWord :size="50" :glyphs="[con.l]"/>
      <RunicWord :size="50" :glyphs="[con.s]"/>
      <RunicWord :size="50" :glyphs="[con.z]"/><br>
      <pre> n    l     s     z</pre>
    </p>
    <p>
      <RunicWord :size="50" :glyphs="[con.tdh]"/>
      <RunicWord :size="50" :glyphs="[con.tfh]"/>
      <RunicWord :size="50" :glyphs="[con.ch]"/>
      <RunicWord :size="50" :glyphs="[con.sh]"/>
      <br>
      <pre> TH    th   ch   sh</pre>
    </p>
  </div>
</div>
</template>

<style scoped>
.side {
  position:fixed;
  right:0;
  top:0;
}
.side>div{
  border: 1px solid black;
  background: gray;
  float:right;
  width: 200px;
  padding:0.2rem;
}
.side > div>p {
  margin-bottom: 1rem;
}
</style>
