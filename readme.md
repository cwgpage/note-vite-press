# 浮生若梦 — 个人知识站点

基于 [VitePress](https://vitepress.dev/) 构建的个人笔记与知识库站点，记录生活感悟与学习历程。

---

## 目录结构

```
note-vite-press/
├── docs/                          # 文档源文件目录（所有 Markdown 内容存放于此）
│   ├── index.md                   # 首页（VitePress Home Page 布局）
│   ├── markdown-examples.md       # Markdown 扩展语法示例页
│   ├── api-examples.md            # VitePress Runtime API 示例页
│   ├── tutorial/                  # 教程目录
│   │   └── index.md
│   ├── learning/                  # 学习笔记目录（当前为空，待填充）
│   │   ├── html/
│   │   ├── css/
│   │   ├── JavaScript/
│   │   ├── nodejs/
│   │   └── python/
│   ├── recommande/                # 推荐内容目录（当前为空，待填充）
│   └── .vitepress/                 # VitePress 核心配置目录
│       ├── config.mts             # 主配置文件（站点标题、描述、导航、侧边栏等）
│       ├── nav.ts                 # 顶部导航栏配置
│       ├── sidebar.ts             # 侧边栏配置
│       ├── theme/                 # 自定义主题目录
│       │   ├── index.ts           # 主题入口文件（扩展默认主题）
│       │   └── style.css          # 自定义 CSS 样式（主题色、渐变等）
│       ├── cache/                 # 开发模式缓存目录（自动生成，git 忽略）
│       └── dist/                  # 打包输出目录（静态站点构建产物，git 忽略）
├── .gitignore                     # Git 忽略规则
├── deploy.sh                      # 一键部署脚本（构建 + GitHub Pages 发布）
├── package.json                   # 项目依赖声明
└── readme.md                      # 本文件
```

---

## 快速开始

### 环境要求

- **Node.js** >= 18
- **npm** / **pnpm** / **yarn**（本项目推荐使用 npm）

### 安装依赖

```bash
npm install
```

> VitePress 是项目的唯一依赖，版本 `^1.6.4`，安装在 `devDependencies` 中。

### 开发预览

启动一个带热重载的本地开发服务器，预览效果：

```bash
npm run docs:dev
```

启动后访问 `http://localhost:5173/note-vite-press/`（与 `config.mts` 中配置的 `base` 路径保持一致）。

### 构建生产包

生成静态站点文件到 `docs/.vitepress/dist`：

```bash
npm run docs:build
```

### 预览生产构建

在本地预览 `dist` 目录中的静态站点：

```bash
npm run docs:preview
```

---

## 部署

### 一键部署到 GitHub Pages

项目内置了 `deploy.sh` 脚本，执行以下流程：
1. 运行 `npm run docs:build` 构建静态文件
2. 进入 `docs/.vitepress/dist` 目录
3. 初始化 Git 仓库并提交
4. 强制推送到 GitHub 远程仓库的 `pages` 分支

```bash
npm run deploy
# 或直接执行
bash deploy.sh
```

> **注意**：首次使用前，请按需修改 `deploy.sh` 中的 GitHub 仓库地址（第 23 行）。

### 部署到其他平台

构建产物在 `docs/.vitepress/dist`，为纯静态文件，可直接部署到：
- **GitHub Pages** / **GitLab Pages** — 使用 CI/CD 或手动推送
- **Vercel** — `vercel.json` 指定输出目录
- **Netlify** — `netlify.toml` 指定构建命令
- **任意静态文件服务器**（Nginx、Caddy 等）

---

## 核心配置说明

### `docs/.vitepress/config.mts`

VitePress 主配置文件，关键字段：

| 字段 | 说明 |
|------|------|
| `title` | 站点标题，显示在浏览器标签页 |
| `description` | 站点描述，用于 SEO |
| `base` | 部署路径，本项目为 `/note-vite-press/`（GitHub Pages 仓库名） |
| `themeConfig.nav` | 顶部导航栏配置 |
| `themeConfig.sidebar` | 侧边栏目录配置 |
| `themeConfig.search.provider` | 搜索提供者，`local` 为本地搜索（无需额外配置） |
| `themeConfig.socialLinks` | 页脚社交链接（GitHub 图标） |

### `docs/.vitepress/nav.ts`

顶部导航栏配置，定义了「推荐」「教程」「学习」「Examples」等主导航入口。

### `docs/.vitepress/sidebar.ts`

侧边栏配置，当前为 `/tutorial/` 路径下的目录结构。需与实际文档目录对应后完善。

### `docs/.vitepress/theme/index.ts`

主题入口文件，继承 VitePress 默认主题 (`DefaultTheme`)，可在 `enhanceApp` 钩子中注册全局组件、插件等。

### `docs/.vitepress/theme/style.css`

自定义主题样式，主要覆盖了：
- **品牌色彩**：使用靛蓝（Indigo）色系作为主题色
- **首页 Hero 区域**：渐变文字与背景效果
- **自定义容器**：Tip 提示框样式
- **Algolia 搜索**：品牌色强调

---

## 文档编写规范

### Frontmatter 头部信息

每个 `.md` 文件开头使用 YAML frontmatter 定义页面元数据：

```yaml
---
outline: deep        # 目录深度（deep 表示显示所有层级）
---
```

常用 frontmatter 字段：
- `title` — 页面标题
- `description` — 页面描述（SEO）
- `layout` — 页面布局类型（`page`、`home`、`doc` 等）
- `outline` — 右侧大纲目录深度

### 目录组织建议

```
docs/
├── index.md              # 首页
├── guide/                 # 指南类文档
├── tutorial/             # 教程类文档
├── learning/             # 学习笔记
│   ├── html/
│   ├── css/
│   ├── javascript/
│   └── ...
└── .vitepress/            # 配置文件
```

> **提示**：`nav.ts` 和 `sidebar.ts` 中的链接路径需与实际文件路径保持一致。添加新文档后，记得同步更新这两个配置文件中的导航和侧边栏条目。

---

## 常见问题

### Q: 修改配置后页面没变化？

确保开发服务器已重启，或清除 `docs/.vitepress/cache` 缓存目录后重新 `docs:dev`。

### Q: 部署后页面404？

检查 `config.mts` 中的 `base` 是否与仓库名称匹配。仓库名为 `note-vite-press`，则 `base` 应为 `/note-vite-press/`。

### Q: 如何添加新页面？

1. 在 `docs/` 下创建 `.md` 文件
2. 在 `nav.ts` 中添加导航链接
3. 在 `sidebar.ts` 中添加侧边栏条目

---

## 相关资源

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress 配置参考](https://vitepress.dev/reference/site-config)
- [VitePress 默认主题](https://vitepress.dev/reference/default-theme)
- [Shiki 语法高亮](https://shiki.style/)（VitePress 内置使用）
