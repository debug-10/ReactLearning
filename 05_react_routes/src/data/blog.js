const blogs = [
  {
    id: 1,
    title: "前端工程化：从零到一构建项目",
    content: "介绍了前端工程化的基础概念，包括项目结构设计、构建工具选择等。",
    author: "Kimi",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C.jpg",
    views: 1200,
    favorites: 200,
    likes: 300,
    tags: ["前端工程化", "项目结构", "构建工具"],
  },
  {
    id: 2,
    title: "Webpack 深入解析与优化实践",
    content:
      "详细讲解了 Webpack 的工作原理、配置优化技巧以及常见问题解决方法。",
    author: "Alice",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C%202.jpg",
    views: 1500,
    favorites: 250,
    likes: 400,
    tags: ["Webpack", "构建优化", "性能提升"],
  },
  {
    id: 3,
    title: "前端代码规范与团队协作",
    content: "探讨了前端代码规范的重要性，以及如何在团队中推行统一的代码规范。",
    author: "Bob",
    image:
      "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/v2-cbe232459476a602895df37c81396ef2_r.jpg",
    views: 1000,
    favorites: 180,
    likes: 280,
    tags: ["代码规范", "团队协作", "前端开发"],
  },
  {
    id: 4,
    title: "前端性能优化的实战经验",
    content: "分享了前端性能优化的常见方法，包括资源压缩、懒加载、缓存策略等。",
    author: "Charlie",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C.jpg",
    views: 1800,
    favorites: 300,
    likes: 500,
    tags: ["性能优化", "资源压缩", "懒加载"],
  },
  {
    id: 5,
    title: "前端自动化测试入门与实践",
    content:
      "介绍了前端自动化测试的基本概念，以及如何使用 Jest 和 Puppeteer 进行测试。",
    author: "David",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C%202.jpg",
    views: 1300,
    favorites: 220,
    likes: 350,
    tags: ["自动化测试", "Jest", "Puppeteer"],
  },
  {
    id: 6,
    title: "前端工程化中的版本控制",
    content:
      "讲解了 Git 在前端项目中的使用，包括分支管理、冲突解决、版本发布等。",
    author: "Eve",
    image:
      "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/v2-cbe232459476a602895df37c81396ef2_r.jpg",
    views: 1100,
    favorites: 190,
    likes: 320,
    tags: ["版本控制", "Git", "分支管理"],
  },
  {
    id: 7,
    title: "前端工程化中的代码分割与懒加载",
    content: "介绍了如何通过代码分割和懒加载提高前端应用的加载性能。",
    author: "Frank",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C.jpg",
    views: 1600,
    favorites: 260,
    likes: 420,
    tags: ["代码分割", "懒加载", "性能优化"],
  },
  {
    id: 8,
    title: "前端工程化中的静态资源管理",
    content: "探讨了静态资源的管理方法，包括图片压缩、CSS/JS 文件的优化等。",
    author: "Grace",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C%202.jpg",
    views: 1400,
    favorites: 240,
    likes: 380,
    tags: ["静态资源", "图片压缩", "文件优化"],
  },
  {
    id: 9,
    title: "前端工程化中的跨域问题解决方案",
    content:
      "介绍了前端开发中常见的跨域问题以及多种解决方案，如代理、CORS 等。",
    author: "Hank",
    image:
      "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/v2-cbe232459476a602895df37c81396ef2_r.jpg",
    views: 1700,
    favorites: 280,
    likes: 450,
    tags: ["跨域问题", "代理", "CORS"],
  },
  {
    id: 10,
    title: "前端工程化中的持续集成与持续部署",
    content: "讲解了如何通过 CI/CD 流程自动化前端项目的构建、测试和部署。",
    author: "Ivy",
    image: "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/book/OIP-C%202.jpg",
    views: 1900,
    favorites: 320,
    likes: 550,
    tags: ["持续集成", "持续部署", "CI/CD"],
  },
];

export default blogs;
