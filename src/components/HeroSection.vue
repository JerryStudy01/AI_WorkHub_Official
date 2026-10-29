<script setup lang="ts">
import DesktopPreview from './DesktopPreview.vue'
</script>

<template>
  <section class="hero" id="top" aria-labelledby="slogan">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <h1 id="slogan">让 AI 成为你的工作助手</h1>
        <p class="lead">
          在本机授权的工作区里，用真实文件变更写好日/周报；<br />
          桌面端对话随时协助，双击便携包即可用。
        </p>
        <div class="cta-row">
          <a class="btn btn-solid" href="#download">下载 Windows 便携包</a>
          <a class="btn btn-ghost" href="#features">查看功能</a>
        </div>
        <p class="footnote">产品为 Electron 桌面端 · 本站不是产品 Web 应用</p>
      </div>
      <DesktopPreview />
    </div>
  </section>
</template>
