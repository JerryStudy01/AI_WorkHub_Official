<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BrandMark from './BrandMark.vue'

const stuck = ref(false)

function onScroll() {
  stuck.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="topbar" :class="{ 'is-stuck': stuck }">
    <div class="wrap topbar-inner">
      <a class="brand" href="#top">
        <BrandMark :size="34" />
        <span>AI WorkHub</span>
      </a>
      <div class="top-actions">
        <nav class="nav" aria-label="页内导航">
          <a href="#features">功能</a>
          <a href="#download">下载</a>
        </nav>
        <a class="btn btn-pill" href="#download">
          <span class="cta-full">下载 Windows 便携包</span>
          <span class="cta-short">下载</span>
        </a>
      </div>
    </div>
  </header>
</template>
