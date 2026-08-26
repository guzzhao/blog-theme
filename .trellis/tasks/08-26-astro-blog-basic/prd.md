# PRD: Astro 重构博客主题基础版

## Goal

用 Astro 在本仓库（D:\code\theme）重构原 VitePress 博客主题（D:\code\blog-theme），实现基础功能（MVP），使用最新稳定依赖。

## Background

旧主题为 VitePress 1.6.3 + Tailwind 4 + daisyUI 5 的极简博客，核心体验是：首页按年份分组的极简文章列表 + 文章详情页 + 明暗双主题。本任务用 Astro 复刻该基础体验，标签筛选功能明确砍掉。

## Requirements

- R1 Astro 项目骨架：最新 Astro + Tailwind CSS v4（不使用 daisyUI），静态构建，npm 管理
- R2 内容集合（content collections）管理 `src/content/posts/*.md`；frontmatter schema 校验：`title`(必填)、`date`(必填)、`author`、`public`(默认 false)
- R3 首页文章列表：仅列出 `public: true` 的文章，按日期倒序、按年份分组展示；每条显示 标题 + MM-DD 日期
- R4 文章详情页 `/posts/<slug>`：大标题 + 日期头部、正文渲染、代码高亮（Shiki vitesse-dark 风格）、返回列表入口 + BackToTop 悬浮按钮
- R5 明暗主题切换：自定义浅/深两套 CSS 变量配色 + Tailwind dark 模式，切换状态持久化（localStorage），无闪烁
- R6 导航栏：站点标题点击回首页
- R7 迁移旧仓库 `posts/*.md` 示例文章到新内容目录

## Out of Scope（后续迭代）

- 标签筛选（用户明确砍掉）、tag 展示
- RSS 订阅
- 文章页复制链接按钮
- Info 按钮、归档页、关于页、评论、搜索
- lastUpdated 显示

## Acceptance Criteria

- AC1 `npm dev` 可正常启动；`npm build` 产出静态站点且无错误
- AC2 首页列出所有 `public: true` 文章，按年份分组、时间倒序；不含非 public 文章
- AC3 点击文章标题进入详情页，正文与代码块高亮渲染正常
- AC4 可切换明暗主题，刷新后保持所选主题，首屏无主题闪烁
- AC5 旧示例文章迁移后在新站正常展示（标题、日期、正文）
- AC6 frontmatter 缺少 title 或 date 时构建报校验错误

## Key Decisions

- D1 MVP 不含标签筛选（用户决策，2025-08-26）
- D2 技术栈：Astro 最新版 + Tailwind v4；不用 daisyUI（用户决策，2025-08-26）
- D2a 明暗配色用自定义 CSS 变量定义，不依赖组件库主题
- D3 代码高亮用 Astro 内置 Shiki，配置 vitesse-dark 主题对齐旧观感
