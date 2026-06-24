# Personal Homepage

极简黑白风格的个人主页，基于 React + Vite + Tailwind CSS 构建。

## 快速开始

```bash
npm install
npm run dev
```

## 自定义内容

编辑 `src/data/profile.js` 修改个人信息：

- `name` / `tagline` / `subtitle` — Hero 区域
- `about` — 个人介绍和技能标签
- `projects` — 项目展示
- `experience` — 工作/教育经历
- `social` — 社交链接

## 构建

```bash
npm run build
```

产物在 `dist/` 目录。

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. GitHub Actions 会自动构建并部署
3. 在仓库 Settings → Pages 中选择 `GitHub Actions` 作为来源

> **注意**：如果部署到项目站点 (`username.github.io/repo-name`)，需在 `vite.config.js` 中将 `base` 改为 `'/repo-name/'`。
