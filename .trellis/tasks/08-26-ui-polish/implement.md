# Implement: 博客界面美化

## 有序清单

1. [ ] `global.css`：字体栈、颜色变量微调（含暗色主题色亮档）、selection/滚动条
2. [ ] `BaseLayout.astro`：body 字体应用、新增简洁页脚
3. [ ] `index.astro`：年份标题装饰化、条目 hover 动效、日期排版
4. [ ] `[...slug].astro`：标题装饰、排版规则增强（blockquote/table/pre/code）
5. [ ] 新建 `ReadingProgress.astro` 并挂到文章页
6. [ ] `Nav.astro` / `ThemeToggle.astro` / `BackToTop.astro` 细节动效
7. [ ] `404.astro` 美化

## 验证

```bash
npx astro check   # 0 error / 0 warning
npm run build     # 成功无 WARN
```

人工核对（npm run preview）：

- 明暗两模式逐页检查首页/文章页/404
- 进度条随滚动更新；hover 无布局抖动
- 功能回归：public 过滤、年份分组、主题持久化、回顶部

## 回滚点

- 单一提交，可整体 revert；无 schema/路由变更
