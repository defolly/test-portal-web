import React, { useRef } from 'react';
import { Button, Card, Col, Row, Divider, Statistic } from 'antd';
import styles from './index.less';
export default (props: any) => {
  console.log('props', props);
  return (
    <div>
      <Card bordered={false}>
        <div className={styles.companySys}>
          <div className={styles.flex}>
            <div>XXX有限公司</div>
            <div>
              系统有效日期：
              <span className={styles.dangerText}>2021-01-01~2021-12-31</span>
              <Button type="link">续费</Button>
            </div>
          </div>

          <div className={styles.count}>
            <span>1,228</span>
            <span>门店数</span>
          </div>

          <Divider type="vertical" style={{ height: '40px' }} />

          <div className={styles.count}>
            <span>130</span>
            <span>仓库数</span>
          </div>
        </div>
      </Card>

      <div className={styles.main}>
        <Row style={{ marginBottom: '12px' }}>
          <Col span={24}>
            <div className={styles.updateNotification}>
              <div className={styles.title}>
                <div>
                  系统更新通知<span>（1条未读）</span>
                </div>
                <div>查看全部</div>
              </div>
              <div className={styles.notification}>
                <div>
                  <div></div>
                  <div>关于数字化服务平台会员中心新版本更新与上线的通知</div>
                  <div>3分钟前</div>
                  <div>详情</div>
                </div>
                <div>
                  <div></div>
                  <div>关于数字化服务平台订单中心2.0新版本更新与上线的通知</div>
                  <div>2021-12-10 14:32</div>
                  <div>详情</div>
                </div>
                <div>
                  <a href='/test-uc-web/excel/用户管理导入模板.xlsx'>下载导入模板</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ marginBottom: '12px' }}>
          <Col span={24}>
            <div className={styles.updateNotification}>
              <div className={styles.title}>
                <div>系统数据</div>
              </div>
              <div className={styles.systemData}>
                <div>
                  <div>已创建用户数</div>
                  <div style={{ backgroundColor: '#5B8FF9' }}>1,387</div>
                </div>
                <div>
                  <div>当前在线用户数</div>
                  <div style={{ backgroundColor: '#5AD8A6' }}>1037</div>
                </div>
                <div>
                  <div>已创建角色数</div>
                  <div style={{ backgroundColor: '#F6BD15' }}>12</div>
                </div>
                <div>
                  <div>已使用模块数</div>
                  <div style={{ backgroundColor: '#E8684A' }}>58</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
