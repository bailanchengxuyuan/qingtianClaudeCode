/**
 * Personal profile data.
 * Edit this file to update your homepage content.
 */

const profile = {
  // ── Hero ──────────────────────────────────────────
  name: '张三',
  tagline: 'Full-Stack Developer & UI Enthusiast',
  subtitle:
    '专注于构建简洁、高性能的 Web 应用。热爱开源，追求极致的用户体验。',

  // ── About ─────────────────────────────────────────
  about: {
    bio: [
      '我是一名全栈开发者，拥有 5 年 Web 开发经验。曾参与多个从零到一的产品构建，擅长 React 生态和 Node.js 后端开发。',
      '工作之余，我喜欢探索新技术、撰写技术博客、参与开源项目。我相信好的代码应该像好的设计一样——简洁、清晰、持久。',
    ],
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker',
      'AWS',
      'GraphQL',
      'Python',
      'Figma',
      'Git',
    ],
  },

  // ── Projects ──────────────────────────────────────
  projects: [
    {
      title: 'OpenTask',
      description:
        '一个开源的任务管理工具，支持看板视图、Markdown 笔记和团队协作。',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      link: 'https://github.com',
      github: 'https://github.com',
    },
    {
      title: 'MinimalUI',
      description:
        '一套极简风格的 React 组件库，专注可访问性和开发者体验，支持 Tree Shaking。',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
      link: 'https://github.com',
      github: 'https://github.com',
    },
    {
      title: 'ReadFlow',
      description:
        '稍后阅读应用，支持全文搜索、标签分类和多设备同步。',
      tech: ['Next.js', 'Prisma', 'NextAuth', 'Vercel'],
      link: 'https://github.com',
      github: 'https://github.com',
    },
    {
      title: 'DevStats',
      description:
        '开发者统计面板，聚合 GitHub、WakaTime 等数据生成可视化报告。',
      tech: ['Vue 3', 'D3.js', 'Express', 'Redis'],
      link: 'https://github.com',
      github: 'https://github.com',
    },
  ],

  // ── Experience ────────────────────────────────────
  experience: [
    {
      role: '高级前端工程师',
      company: '某科技有限公司',
      period: '2023 — 至今',
      description:
        '负责核心产品前端架构设计，主导组件库从零搭建，推动前端工程化落地。',
    },
    {
      role: '前端工程师',
      company: '某互联网公司',
      period: '2021 — 2023',
      description:
        '参与多个 B 端项目开发，优化页面性能，将首屏加载时间降低 60%。',
    },
    {
      role: '全栈开发者',
      company: '某创业公司',
      period: '2019 — 2021',
      description:
        '从零参与两款产品的研发，负责前后端开发及 DevOps 相关工作。',
    },
    {
      role: '计算机科学 · 学士',
      company: '某大学',
      period: '2015 — 2019',
      description:
        '主修计算机科学与技术，辅修数字媒体设计。GPA 3.8/4.0。',
    },
  ],

  // ── Social Links ──────────────────────────────────
  social: {
    github: 'https://github.com',
    email: 'hello@example.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
};

export default profile;
