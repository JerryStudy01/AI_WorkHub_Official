<script setup lang="ts">
import BrandMark from './BrandMark.vue'

/** 静态桌面窗口示意：对话与日/周报草稿。仅作展示，不嵌入 Electron 桌面端。 */
</script>

<template>
  <div class="preview" aria-hidden="true">
    <div class="preview-window">
      <div class="preview-titlebar">
        <span class="preview-app">
          <BrandMark :size="22" />
          <span>AI WorkHub</span>
        </span>
        <span class="preview-controls">
          <svg viewBox="0 0 12 12" width="12" height="12">
            <path d="M2 6.5h8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          </svg>
          <svg viewBox="0 0 12 12" width="12" height="12">
            <rect x="2.2" y="2.2" width="7.6" height="7.6" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.2" />
          </svg>
          <svg viewBox="0 0 12 12" width="12" height="12">
            <path d="M3 3l6 6M9 3L3 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          </svg>
        </span>
      </div>

      <div class="preview-body">
        <div class="chat-col">
          <div class="chat">
            <div class="msg msg-user">
              <span class="bubble bubble-user">今天的变更？</span>
            </div>
            <div class="msg msg-bot">
              <span class="ava ava-bot">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <circle cx="12" cy="12" r="7" fill="#fff" />
                  <circle cx="9.2" cy="11.2" r="1.1" fill="#3B82F6" />
                  <circle cx="14.8" cy="11.2" r="1.1" fill="#7C3AED" />
                  <path d="M9 14.6c1 .9 2 .9 3 .9s2 0 3-.9" fill="none" stroke="#6366F1" stroke-width="1.2" stroke-linecap="round" />
                </svg>
              </span>
              <span class="bubble bubble-bot">
                桌面端工作对话，Markdown 可读回复
                <svg class="heart" viewBox="0 0 24 24" width="11" height="11">
                  <path
                    fill="#F43F5E"
                    d="M12 20s-7-4.4-7-9.1C5 8 6.8 6.2 9.1 6.2c1.3 0 2.4.6 2.9 1.6.5-1 1.6-1.6 2.9-1.6 2.3 0 4.1 1.8 4.1 4.7C19 15.6 12 20 12 20z"
                  />
                </svg>
              </span>
            </div>
            <div class="msg msg-user">
              <span class="bubble bubble-user">帮我起草本周周报</span>
            </div>
          </div>
          <div class="mini-row">
            <div class="mini-card">
              <span class="skel w-70"></span>
              <span class="skel w-48"></span>
            </div>
            <div class="mini-card">
              <span class="skel w-64"></span>
              <span class="skel w-40"></span>
            </div>
          </div>
        </div>

        <div class="doc-card">
          <span class="skel skel-title w-46"></span>
          <span class="skel w-92"></span>
          <span class="skel w-78"></span>
          <span class="skel w-86"></span>
          <span class="skel w-60"></span>
          <span class="skel w-74"></span>
          <span class="skel w-82"></span>
          <span class="skel w-54"></span>
          <span class="skel w-68"></span>
        </div>

        <div class="doc-card doc-chart">
          <span class="skel skel-title w-40"></span>
          <span class="skel w-88"></span>
          <span class="skel w-66"></span>
          <span class="skel w-72"></span>
          <svg class="doc-art" viewBox="0 0 140 72" width="100%" height="72">
            <rect x="8" y="34" width="16" height="30" rx="3" fill="#BFDBFE" />
            <rect x="32" y="16" width="16" height="48" rx="3" fill="#60A5FA" />
            <rect x="56" y="28" width="16" height="36" rx="3" fill="#A78BFA" />
            <path
              d="M86 50c10-18 18-20 28-6 6 8 12 8 18-4"
              stroke="#3B82F6"
              stroke-width="3"
              stroke-linecap="round"
              fill="none"
            />
            <circle cx="132" cy="28" r="5.5" fill="#7C3AED" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
