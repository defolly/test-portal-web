import { useState, useEffect, useMemo } from 'react';
import { Avatar, Badge, Popover, AutoComplete, Input } from 'antd';

import {
  QuestionCircleOutlined,
  StarOutlined,
  SkinOutlined,
  BellOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { history, useModel, Link } from 'umi';


export default (props: any) => {
  const { type = 'index' } = props;

  const { unReadNum, initSocket, resources } = useModel<'portal'>('portal');

  const [showQuery, setShowQuery] = useState(false);
  const [queryKey, setQueryKey] = useState('');

  const hideQuery = () => {
    if (!queryKey) setShowQuery(false);
  };

  const menuOpts = useMemo(() => {
    return resources.map((o: any) => ({
      label: o.menuName,
      value: o.menuName,
      murl: o.microUrl,
      url: o.url,
      id: o.id
    }))
  }, [resources])

  useEffect(() => {
    //@ts-ignore
    if (!window.myInitSocket) {
      initSocket()
    }
  }, [])


  return (
    <>
      {showQuery ? (
        <AutoComplete
          options={menuOpts}
          style={{ width: '200px', marginRight: '8px' }}
          onBlur={hideQuery}
          autoFocus
        >
          <Input suffix={<SearchOutlined />} />
        </AutoComplete>
      ) : (
        <SearchOutlined onClick={() => setShowQuery(true)} />
      )}


      <Badge
        className="msg-badge"
        count={unReadNum > 99 ? '99+' : unReadNum}
        size="small"
      >
        <BellOutlined />
      </Badge>
      <SkinOutlined />
      <StarOutlined />
      <QuestionCircleOutlined />
      <Avatar icon={<UserOutlined />} />
    </>
  );
};
