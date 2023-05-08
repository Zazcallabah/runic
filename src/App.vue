<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "@/SideBar.vue";
</script>

<template>
  <SideBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 1rem
}
</style>
