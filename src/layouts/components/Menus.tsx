import { Menu } from 'antd';
import { useCallback, useEffect } from 'react';
import { Link, useModel } from 'umi';


export default () => {
  const { setIframeUrl, menus } = useModel<'portal'>('portal');

  const renderItem = useCallback((items: any[]) => {
    return items.map((item) => {
      if (item.microUrl) {
        // 微前端
        return <Menu.Item
          key={item.id}
          onClick={() => {
            setIframeUrl('');
          }}
        >
          <Link to={item.microUrl} title={item.menuName}>
            {item.menuName}
          </Link>
        </Menu.Item>

      } else if (item.url && item.resourceId != '0') {
        // 老工程
        return <Menu.Item
          key={item.id}
          title={item.menuName}
          onClick={() => {
            setIframeUrl(item.oldUrl);
          }}
        >
          {item.menuName}
        </Menu.Item>
      } else if (item.resourceId != '0') {
        // 无资源
        return <Menu.Item
          key={item.id}
          title={item.menuName}
        >
          {item.menuName}
        </Menu.Item>

      } else {
        // 菜单组
        return <Menu.SubMenu
          key={item.id}
          title={item.menuName}
          icon={
            item.menuIcon ? (
              <img
                style={{ maxWidth: '24px', maxHeight: '24px' }}
                src={item.menuIcon}
              />
            ) : null
          }>
          {item.children && item.children.length ? renderItem(item.children) : null}
        </Menu.SubMenu>
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      setIframeUrl('');
    };
  }, []);

  return (
    <Menu
      mode={'inline'}
      theme="dark"
    >
      {renderItem(menus)}
    </Menu>
  );
};
