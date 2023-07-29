import React from "react";
import style from "./About.module.scss";
import Image from "next/image";
import { Button, Typography, Row, Col, List, Space, Grid } from 'antd';
import { CheckOutlined, DownloadOutlined } from '@ant-design/icons';
import BG from '@/assets/images/about.png'
import PageTitle from '../PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const About = ({ }) => {

  const { lg } = useBreakpoint();

  const router = useRouter();
  const { about: t } = router.locale === 'ru' ? ru : en;

  return (
    <section className={style.container} id='about'>
      <PageTitle title={t.pageTitle} />
      <Row gutter={40} style={{ marginBottom: '40px' }}>
        <Col span={lg ? 10 : 24} className={style.titleWrp}>
          {/* <Image src={BG} alt='bg' style={{ width: '100%' }} /> */}
          <Title level={3} className={style.firstTitle}>
            {t.title}
          </Title>
        </Col>
        <Col span={lg ? 14 : 24} className={style.cardsWrp}>
          <Paragraph>
            {t.desc}
          </Paragraph>
          <div className={style.cards}>
            <div className={style.card}>
              <span className={style.num}>{t.cards.experience.num}</span>
              <span className={style.desc}>{t.cards.experience.desc}</span>
            </div>
            <div className={style.card}>
              <span className={style.num}>{t.cards.projects.num}</span>
              <span className={style.desc}>{t.cards.projects.desc}</span>
            </div>
            <div className={style.card}>
              <span className={style.num}>{t.cards.partners.num}</span>
              <span className={style.desc}>{t.cards.partners.desc}</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={40}>
        <Col span={lg ? 14 : 24} className={style.listWrp}>
          <List
            header={<h2>{t.list.title}</h2>}
            dataSource={t.list.data}
            renderItem={(item) => (
              <List.Item>
                <Space size={16}>
                  <CheckOutlined />
                  {item}
                </Space>
              </List.Item>
            )}
          />
          <Button size='large' type='primary' style={{ width: '300px' }} >
            <Space>
              <DownloadOutlined />
              {t.downloadButton}
            </Space>
          </Button>
        </Col>
        <Col span={lg ? 10 : 0} className={style.imageWrp}>
          <Image src={BG} alt='bg' style={{ width: '100%' }} />
        </Col>
      </Row>
      <div className={style.content}>
      </div>
    </section >
  );
};

export default About;
