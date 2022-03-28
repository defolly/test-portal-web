import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ignoreMomentLocale: true,

  scripts: ['https://g.alicdn.com/dingding/dinglogin/0.0.5/ddLogin.js'],
  favicon: './images/favicon.ico',

  proxy: {},

  antd: {
  },
  theme: {
    'primary-color': '#FA8500',
  },

  routes: [
    // { path: '/login', component: '@/pages/login' },
    // { path: '/apps', component: '@/pages/apps' },    
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    master: {},
  },
  locale: {
    baseNavigator: false,
  },
  outputPath: 'docs',
  publicPath: './',
  hash: true,
  // history: { type: 'hash' },
});
