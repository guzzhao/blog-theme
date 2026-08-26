# Implement: Astro 博客主题基础版

## 有序清单

1. **项目骨架**
   - [ ] 手工创建 `package.json`、`tsconfig.json`、`astro.config.mjs`、`.gitignore`
   - [ ] `npm install astro tailwindcss @tailwindcss/vite`（最新版，不用 daisyUI）
   - [ ] scripts: dev/build/preview
2. **样式与布局**
   - [ ] `src/styles/global.css`：tailwind + 自定义 CSS 变量双主题 + `@custom-variant dark`
   - [ ] `src/layouts/BaseLayout.astro`：head 内联主题初始化脚本、Nav、slot、Footer
   - [ ] `src/components/Nav.astro`、`ThemeToggle.astro`、`BackToTop.astro`
3. **内容层**
   - [ ] `src/content.config.ts`（glob loader + zod schema）
   - [ ] 迁移旧仓库 `posts/*.md` → `src/content/posts/`（去掉 tag 字段）
   - [ ] `src/consts.ts`（站点标题「无名小卒」等）
4. **页面**
   - [ ] `src/pages/index.astro`：按年分组倒序列表（public only）
   - [ ] `src/pages/posts/[...slug].astro`：详情页（标题+日期头部、render 正文）
   - [ ] `src/pages/404.astro`
5. **验证**（见下）

## 验证命令

```bash
npm build            # 必须无错误（AC1）
npm preview          # 人工核对 AC2–AC5
npx astro check       # 类型检查
```

人工核对点：

- 首页年份分组与倒序；非 public 文章不出现在首页但详情路由仍可直达（可接受）
- 明暗切换 + 刷新保持 + 无闪烁
- 代码块 vitesse-dark 高亮

## 风险与回滚点

- 全新文件，风险低；若 content layer API 与最新 Astro 版本有出入，以官方 docs 为准微调 `content.config.ts`
- daisyUI v5 在 Tailwind v4 下通过 `@plugin "daisyui"` 引入（CSS 配置方式，非 JS config）

## task.py start 前检查

- prd/design/implement 三件套齐备并经用户批准最终摘要
- implement.jsonl / check.jsonl 已填入真实条目
