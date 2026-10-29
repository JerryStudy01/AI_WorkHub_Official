<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="page">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
    </main>
    <SiteFooter />
  </div>
</template>
