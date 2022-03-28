import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useModel, Link } from 'umi';

import './index.less';

import Menus from './components/Menus';
import TopNav from './components/TopNav';



export default function index(props: any) {
  const { loadMenu, project, iframeUrl } = useModel<'portal'>('portal');

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!project?.projectCode) return;
    loadMenu(project);
    console.log('loaded menu')
  }, [project]);

  const { Header, Sider } = Layout;
  const { children } = props;


  return (
    <Layout className="layout-page">
      <Sider className="layout-menu" collapsed={collapsed}>
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
          {collapsed ? '' : <span> XX科技</span>}
        </div>
        <Menus />
      </Sider>

      <Layout className="layout-page">
        <Header className="layout-header">
          <div onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          <div style={{ paddingLeft: '20px' }}>
            {/* <Link to={'/apps'} title="切换产品"> */}
              {project?.projectName}
            {/* </Link> */}
          </div>

          <div className="tool">
            <TopNav type="index" />
          </div>
        </Header>
        <div className="layout-body">
          {iframeUrl ? <iframe name="other" src={iframeUrl} /> : children}
        </div>
      </Layout>
    </Layout>
  );
}
