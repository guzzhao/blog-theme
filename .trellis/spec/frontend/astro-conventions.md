# Astro 项目约定

> 本仓库前端为 Astro v5 博客主题。以下为实际踩坑后确认的约定。

---

## Guidelines

| 约定 | 说明 |
|------|------|
| 包管理 | npm（不用 pnpm/yarn） |
| 组件库 | 不使用 daisyUI；配色用 `src/styles/global.css` 中自定义 CSS 变量（`--bg/--fg/--muted/--theme-color`），经 `@theme inline` 暴露为 `bg-bg/text-fg` 等工具类 |
| 明暗切换 | class 策略：`@custom-variant dark (&:where(.dark, .dark *))`；`<html>` 的 `.dark` 由 BaseLayout head 内联脚本设置（localStorage → prefers-color-scheme 兜底），避免 FOUC |
| 内容集合 | `src/content.config.ts` 用 glob loader + zod schema；zod 从 `astro/zod` 导入（`astro:content` 的 `z` 导出已废弃） |
| 动态路由 | content layer loader 下文章 slug 用 `post.id`（不是旧 `post.slug`）；渲染用 `await render(post)` |
| 组件内样式 | Tailwind v4 在 `.astro` 组件 `<style>` 块中用 `@apply` 必须先写 `@reference "<相对路径到 global.css>";`，否则构建报 unknown utility class |
| Markdown 配置 | 最新 Astro 已移除 `markdown.image` 配置项（默认已懒加载）；Shiki 主题在 `astro.config.mjs > markdown.shikiConfig.theme` 设置（当前 vitesse-dark） |
| VitePress 遗留语法 | 旧文章的 `[[TOC]]`、`{#anchor}`、`:::` 容器、```` ```js:line-numbers ```` 等 VitePress 扩展在 Astro 下不生效或降级为纯文本，迁移时需清理 |

## Quality Check

```bash
npx astro check   # 类型检查，要求 0 error / 0 warning
npm run build     # 构建必须成功且无 WARN
```
