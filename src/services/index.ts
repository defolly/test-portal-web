

/**@name 帐号密码登录 */
export const formLogin = (param: {
  username: string;
  password: string;
  shortMsgCode: string;
  loginType: number;
  remember: boolean;
}) => {
  //todo
};

/** @name 钉钉扫码登录 */
export const ddLogin = (code: string, state: string) => {
  //todo
};

/** @name 获取用户项目菜单 */
export const getMenu = async (projectId: string) => {
  // toto请求后端api取数据

  return {
    flag: { retCode: '0', retMsg: 'success' },
    rows: [
      {
        "children":
          [{
            "children": [],
            "companyId": "1",
            "id": "1060715707986399233",
            "menuIcon": null,
            "menuName": "用户管理",
            "projectId": "1",
            "resourceId": "5",
            "url": "/test-uc-web/#/user",
          },
          {
            "children": [],
            "companyId": "1",
            "id": "1060715708007370753",
            "menuIcon": null,
            "menuName": "角色管理",
            "projectId": "1",
            "resourceId": "6",
            "url": "/test-uc-web/#/role",
          },
          {
            "children": [],
            "companyId": "1",
            "id": "163115617346915607",
            "menuIcon": null,
            "menuName": "数据权限",
            "projectId": "1",
            "resourceId": "1057465348295274497",
            "url": null
          }],
        "companyId": "1",
        "id": "1",
        "menuIcon": null,     
        "menuName": "权限管理",
        "projectId": "1",
        "resourceId": "0",
        "url": null
      }],
    total: undefined
  }
}


/** 获取微前端子工程配置 */
export const getMicroApp = async () => {
  // todo请求后端api取数据
  const data = [
    {
      name: 'test-uc-web',
      entry: '/test-uc-web/',
      path: '/uc-web/',
      dev: 'http://localhost:8010',
    },
    // {
    //   name: 'test-mdm-web',
    //   entry: '/test-mdm-web/',
    //   path: '/mdm-web/',
    //   dev: 'http://localhost:8015',
    // },   
    // {
    //   name: 'test-pms-web',
    //   entry: '/test-pms-web/',
    //   path: '/pms-web/',
    //   dev: 'http://localhost:8020',
    // },  
    // {
    //   name: 'test-pos-web',
    //   entry: '/test-pos-web/',
    //   path: '/pos-web/',
    //   dev: 'http://localhost:8025',
    // },  
  ];
  return data;
};
