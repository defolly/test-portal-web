import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ignoreMomentLocale: true,

  // dynamicImport: {
  //   loading: '@/components/Loading',
  // },
  // hash: true,

  scripts: ['https://g.alicdn.com/dingding/dinglogin/0.0.5/ddLogin.js'],
  favicon: '/images/favicon.ico',

  proxy: {

  },

  antd: {
    // dark: true, // 开启暗色主题
    // compact: true, // 开启紧凑主题
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
      routes: [{ path: '/', component: '@/pages/index' }],
    },
    // { component: '@/components/404' },
  ],
  fastRefresh: {},
  qiankun: {
    master: {},
  },
  locale: {
    baseNavigator: false,
  },
  outputPath: 'docs',
  history: { type: 'hash' },
});
