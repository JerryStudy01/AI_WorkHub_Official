<script setup lang="ts">
import { useId } from 'vue'

/**
 * 扁平 AW 标记（定稿方案 B）。
 * 同一页有多枚时渐变 id 必须唯一，否则后一枚会把前一枚的颜色冲掉。
 */
withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 32 },
)

const uid = `aw${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
</script>

<template>
  <svg
    class="brand-mark"
    :width="size"
    :height="size"
    viewBox="0 0 40 40"
    aria-hidden="true"
  >
    <defs>
      <linearGradient :id="uid" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop stop-color="#60A5FA" />
        <stop offset="0.55" stop-color="#6366F1" />
        <stop offset="1" stop-color="#7C3AED" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="12" :fill="`url(#${uid})`" />
    <!-- 用笔画而不是文字，缩小到窗口标题栏时仍能认出 AW -->
    <g fill="none" stroke="#ffffff" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7.6 29.2 13.2 11.4 18.8 29.2" />
      <path d="M10 22.6h6.2" />
      <path d="M21.4 11.4 24.8 29.2 29.2 16.8 33.6 29.2 37 11.4" />
    </g>
  </svg>
</template>
