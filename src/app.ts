
import { getMicroApp } from './services';

//@ts-ignore
window.lsAppList = JSON.parse(localStorage.getItem('lsApps') || "[]");


export const qiankun = getMicroApp().then((data) => {
  const apps: any = [];
  const appRoutes: any = [];

  // 本地开发
  const dev = process.env.NODE_ENV === 'development';

  data.forEach((item) => {
    apps.push({
      name: item.name,
      entry: dev ? item.dev || item.entry : item.entry,
    });
    appRoutes.push({
      path: item.path,
      microApp: item.name,
      autoSetLoading: true,
    });
  });

  // @ts-ignore
  window.lsAppList = data;
  localStorage.setItem('lsApps', JSON.stringify(data));

  return {
    apps,
    routes: appRoutes,
    lifeCycles: {
      afterMount: (props: any) => {
        console.log('parent afterMount', props);
      },
      beforeMount: (props: any) => {
        console.log('parent beforeMount', props);
      },
    },
  };
});

// export function useQiankunStateForSlave() {
//   const [masterState, setMasterState] = useState({});
//   console.log('qiankunStateForSlave')
//   return {
//     masterState,
//     setMasterState,
//   };
// }
