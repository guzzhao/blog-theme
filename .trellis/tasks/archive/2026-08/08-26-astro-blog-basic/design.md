# Design: Astro 博客主题基础版

## 技术栈与版本策略

- astro：最新稳定（v5.x，content layer API）
- tailwindcss + @tailwindcss/vite：v4（不使用 daisyUI，用户决策）
- 包管理：npm；TypeScript 严格模式

## 目录结构

```
├── astro.config.mjs          # vite 插件: @tailwindcss/vite; shiki vitesse-dark
├── src/
│   ├── content.config.ts     # posts collection: glob loader + zod schema
│   ├── content/posts/*.md    # 迁移自旧仓库
│   ├── layouts/BaseLayout.astro   # html 骨架、主题初始化脚本、Nav、Footer
│   ├── components/
│   │   ├── Nav.astro         # 站名回首页
│   │   ├── ThemeToggle.astro # 明暗切换（含持久化）
│   │   └── BackToTop.astro   # 滚动>300px 出现
│   ├── pages/
│   │   ├── index.astro       # 文章列表（按年分组）
│   │   ├── posts/[...slug].astro  # 详情页
│   │   └── 404.astro
│   ├── styles/global.css     # tailwind + 自定义 CSS 变量双主题 + dark variant
│   └── consts.ts             # SITE_TITLE 等常量
```

## 数据流与契约

1. `src/content.config.ts`：
   - `defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/posts' }), schema: z.object({ title: z.string(), date: z.coerce.date(), author: z.string().optional(), public: z.boolean().default(false) }) })`
2. 首页：`getCollection('posts', p => p.data.public)` → 按 `date` 倒序 → `reduce` 成 `Map<year, Post[]>` 渲染分组列表。
3. 详情页：`getStaticPaths()` 由 collection 生成 `{ params: { slug }, props: { post } }`；正文用 `render(post)`。

## 主题切换设计（无组件库）

- 在 `global.css` 中自定义两套 CSS 变量（`--color-bg`、`--color-text`、`--theme-color` 等）：`:root` 为亮色，`.dark` 为暗色。
- Tailwind v4 通过 `@custom-variant dark (&:where(.dark, .dark *))` 启用 class 策略的 `dark:` 变体。
- `<html>` 的 `.dark` class 由内联脚本在 head 中同步设置：读取 `localStorage.theme`，无则跟随 `prefers-color-scheme`，避免 FOUC。
- ThemeToggle 点击翻转 `.dark` 并写 localStorage。

## 兼容性说明

- frontmatter 兼容旧文章格式（title/date/author/public）；旧的 `tag` 字段不再进 schema（MVP 无标签功能），迁移时移除该字段（schema 非 strict）。
- 路由从 VitePress 的 `/posts/xxx.html` 变为 Astro clean URL `/posts/xxx`（build.format 默认 directory）。

## 权衡记录

- 不用 daisyUI 后需自己维护少量配色变量与按钮样式 —— 换取零组件库依赖、更小包体、完全可控的视觉。
- 用 content collections 而非直接读 fs：获得类型安全与构建期校验（AC6），成本是多一个配置文件。
- Shiki 内置而非引入外部高亮：零额外依赖，主题名与旧站一致。
- 不做 RSS/复制链接：首版求简，留后续迭代。

## 回滚考虑

- 全部为新文件，不覆盖既有 Trellis 配置；出问题直接删 `src/`、配置文件与依赖重装即可。
