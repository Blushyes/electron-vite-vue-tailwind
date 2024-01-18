<template>
  <div class="h-screen w-screen flex items-center justify-center" @mouseenter="handleMouseenter"
       @mouseleave="handleMouseleave">
    <home @click="handlerClick"></home>
  </div>
</template>

<script setup lang="ts">
import Home from "./views/home/home.vue";
import {onMounted} from "vue";

async function handlerClick() {
  await window.electronAPI.hello()
}

onMounted(async () => {
  await window.electronAPI.hello()
})

async function handleMouseenter() {
  await window.electronAPI.ignoreMouse()
}

async function handleMouseleave() {
  await window.electronAPI.unIgnoreMouse()
}
</script>
