import { useState, useCallback, useEffect } from 'react';
import { history } from 'umi';

import {
  formLogin,
  ddLogin,
  getMenu,
} from '@/services';



if (!localStorage.getItem('umi-locale')) {
  localStorage.setItem('umi-locale', 'zh-CN');
}


const treeEach = function (list: any[], fn: Function, children = "children") {
  list.forEach((item, index) => {
    fn(item, index, list);
    if (item[children] && item[children].length) {
      treeEach(item[children], fn, children)
    }
  })
}



export default function portal() {
  const [menus, setMenus] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [iframeUrl, setIframeUrl] = useState('');
  const [project, setProject] = useState<any>({ projectId: 1, projectCode: 'P001', projectName: '集成中心' })
  const [unReadNum, setUnReadNum] = useState(5);


  const loadMenu = useCallback(async (project) => {

    const { rows = [] } = await getMenu(project?.projectId);

    //@ts-ignore
    const microApp = window.lsAppList || [];

    const items: any[] = [];

    treeEach(rows, (item: any) => {
      if (item.resourceId && item.resourceId !== '0' && item.url) {
        let path = ''; //path 为前端项目编码
        let url = ''; // url 为前端模块路由        
        if (item.url.includes('#')) {
          // 处理 hash 路由
          const arr = item.url.split('#');
          path = arr[0];
          url = arr[1];
        } else if (item.url.startsWith('/')) {
          const idx = item.url.indexOf('/', 1);
          path = item.url.slice(0, idx + 1);
          url = item.url.slice(idx);
        }

        // 判断是否为 qiankun 微前端项目
        const mApp = microApp.find((o: any) => o.entry === path);
        if (mApp) {
          item.microApp = mApp.name;
          item.microUrl = mApp.path + url.slice(1);
        }
        items.push(item);
      }
    });

    setMenus(rows);
    setResources(items);
  }, []);

  const initSocket = useCallback(() => {
    // todo 读取消息及通知
  }, [])

  return {
    unReadNum,
    menus,
    resources,
    iframeUrl,
    project,
    setProject,
    loadMenu,
    setIframeUrl,
    initSocket,
  };
}
