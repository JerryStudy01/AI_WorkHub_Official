/** 官网构建期配置。这里只有下载链接和版本号，不连接产品接口。 */

function readEnv(value: string | undefined, fallback: string): string {
  if (typeof value !== 'string') return fallback
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : fallback
}

/** Windows 便携包地址。`#` 表示产物 URL 尚未配置。 */
export const downloadUrl = readEnv(import.meta.env.VITE_DOWNLOAD_URL, '#')

/** 下载卡片上的版本占位，发布时改环境变量即可。 */
export const appVersion = readEnv(import.meta.env.VITE_APP_VERSION, 'v0.1.0')

export const downloadIsPlaceholder = downloadUrl === '#'

/** 页脚「文档」「反馈」都指向本仓 Issues。 */
export const issuesUrl = 'https://github.com/JerryStudy01/AI_WorkHub_Official/issues'
