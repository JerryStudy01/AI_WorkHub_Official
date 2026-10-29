<script setup lang="ts">
import { issuesUrl } from '../config'
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <p>© AI WorkHub · 仅桌面端 · 本站非应用</p>
      <p class="footer-sub">
        <span>仅扫描用户授权目录</span>
        <a :href="issuesUrl" target="_blank" rel="noopener noreferrer">文档</a>
        <a :href="issuesUrl" target="_blank" rel="noopener noreferrer">反馈</a>
      </p>
    </div>
  </footer>
</template>
