# Design: 博客界面美化（精致极简）

## 设计语言

- 字体：`font-sans` 栈调整为系统优先中文栈（`ui-sans-serif, system-ui, 'PingFang SC', 'Microsoft YaHei', ...`）；站名/文章标题可用 `font-serif` 增加质感（Georgia + 宋体系）
- 颜色变量微调：亮色 `--bg #fcfcfc / --fg #1f2937 / --muted #6b7280`；暗色 `--bg #17181c / --fg #d6d3cd / --muted #8a919e`，主题色保持 `#00629f`，暗色下用亮一档 `#4da3da`
- 动效统一节奏：150–300ms ease-out；只动 color/transform/opacity

## 改动点映射

| 文件 | 改动 |
|---|---|
| `src/styles/global.css` | 变量微调、字体栈、selection 配色、滚动条样式 |
| `src/layouts/BaseLayout.astro` | 引入字体栈、页脚（版权行，纯文本） |
| `src/pages/index.astro` | 年份标题弱化装饰化、条目 hover（主题色 + translate-x）、日期排版 |
| `src/pages/posts/[...slug].astro` | 标题左侧主题色竖条装饰、引用/表格/代码块观感、阅读进度条组件挂载 |
| `src/components/Nav.astro` | 边框透明度降低、hover 过渡 |
| `src/components/ThemeToggle.astro` | hover 旋转/缩放过渡 |
| `src/components/BackToTop.astro` | transform+opacity 联合过渡 |
| `src/pages/404.astro` | 大字号渐变数字 + 返回链接按钮化 |

## 阅读进度条设计

- 新增 `src/components/ReadingProgress.astro`：fixed top-0 高 2px 主题色条
- JS 监听 scroll，宽度 = scrollTop / (scrollHeight - clientHeight)，`requestAnimationFrame` 节流；仅文章布局使用

## 权衡与风险

- 不引入 @tailwindcss/typography（避免新依赖 + 定制受限），继续手写排版规则但补齐细节
- 暗色对比度以 AC5 为准手工校验；Shiki vitesse-dark 固定深底，两种模式下均包圆角容器即可协调

## 回滚

- 全部为样式层改动，单 commit 可整体 revert
