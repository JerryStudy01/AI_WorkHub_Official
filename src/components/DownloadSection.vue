<script setup lang="ts">
import { appVersion, downloadIsPlaceholder, downloadUrl } from '../config'
</script>

<template>
  <section class="download" id="download" aria-labelledby="download-title">
    <div class="wrap">
      <div class="download-card">
        <div class="download-copy">
          <h2 id="download-title">下载 Windows 便携包</h2>
          <ul class="download-points">
            <li>无需安装</li>
            <li>双击即用</li>
            <li>Windows x64</li>
          </ul>
          <p class="download-notes">
            面向 Windows 的桌面客户端<br />
            无需安装，下载后双击即可使用
          </p>
          <p class="version">{{ appVersion }}</p>
        </div>
        <!-- 占位时用按钮，避免 href="#" 把页面拉回顶部。真实地址才是链接。 -->
        <button
          v-if="downloadIsPlaceholder"
          type="button"
          class="exe-btn is-placeholder"
          aria-disabled="true"
          :aria-label="`下载 Windows x64 便携包 ${appVersion}，地址尚未发布`"
        >
          .exe 便携包
        </button>
        <a
          v-else
          class="exe-btn"
          :href="downloadUrl"
          rel="noopener noreferrer"
          :aria-label="`下载 Windows x64 便携包 ${appVersion}`"
        >
          .exe 便携包
        </a>
      </div>
      <p v-if="downloadIsPlaceholder" class="placeholder-note">便携包下载地址即将发布。</p>
    </div>
  </section>
</template>
