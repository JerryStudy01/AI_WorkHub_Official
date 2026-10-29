# AI WorkHub 官网

AI WorkHub 的官方介绍与下载页。产品本体是 Electron 桌面端（Windows 便携包）。本站只做介绍和下载，**本站不是产品 Web 应用**。

页面结构：顶栏、Hero、两条核心能力（对话、日/周报总结）、Windows 便携包下载区、页脚。

## 本地运行

需要 Node.js 22 或更新版本。

```bash
npm install
npm run dev
```

开发服务器端口是 **4327**：<http://127.0.0.1:4327/>

```bash
npm run build
npm run preview
```

`npm run build` 会先做 TypeScript 检查，再把静态站点输出到 `dist/`。

## 配置下载地址

```bash
cp .env.example .env
```

| 变量 | 默认 | 说明 |
| --- | --- | --- |
| `VITE_DOWNLOAD_URL` | `#` | Windows 便携包直链 |
| `VITE_APP_VERSION` | `v0.1.0` | 下载卡片上的版本号 |

产品仓 [JerryStudy01/AI_WorkHub](https://github.com/JerryStudy01/AI_WorkHub) 目前没有 Release 资产，所以默认保持 `VITE_DOWNLOAD_URL=#`。这时「.exe 便携包」是按钮而不是链接：点击不会下载文件，也不会跳回页顶，卡片下方显示「便携包下载地址即将发布。」

便携包发布之后：

1. 在产品仓产出 `*-win-portable.exe`，并挂到 GitHub Release。
2. 把 `VITE_DOWNLOAD_URL` 设成该文件的直链，或 Release asset URL。
3. 把 `VITE_APP_VERSION` 改成对应版本。
4. 重新执行 `npm run build`，再部署 `dist/`。

改环境变量后需要重启 `npm run dev`，或重新 build。保持 `#` 直到有真实产物，页面上不放假下载链接。

## 页脚

「文档」和「反馈」都指向本仓 Issues：

<https://github.com/JerryStudy01/AI_WorkHub_Official/issues>

## 部署到 GitHub Pages

这是纯静态介绍页，适合用 GitHub Pages 托管。

- 项目站点地址形如 `https://jerrystudy01.github.io/AI_WorkHub_Official/`。
- `vite.config.ts` 里 `base` 为 `./`，构建结果使用相对路径，放在项目站点子路径下可以直接打开。
- 在仓库 Settings → Pages 选择 GitHub Actions，构建后上传 `dist/`。自定义域名时把 `base` 改回 `/` 再构建。

## 和产品仓的关系

产品继续在 [JerryStudy01/AI_WorkHub](https://github.com/JerryStudy01/AI_WorkHub) 开发。本仓只链到便携包产物，不包含 Electron 壳、后端，也不暴露产品里的对话或写报页面。
