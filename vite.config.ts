import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 官网是静态介绍页。base 用相对路径，GitHub Pages 项目站点子路径也能直接打开。
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 4327,
    strictPort: true,
  },
  preview: {
    port: 4327,
    strictPort: true,
  },
})
