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
import { data } from './mockdata';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const About = ({ }) => {

  const { lg } = useBreakpoint();

  const router = useRouter();
  const t = router.locale === 'ru' ? ru : en;

  return (
    <section className={style.container} id='about'>
      <PageTitle title={t.about.pageTitle} />
      <Row gutter={40} style={{ marginBottom: '40px' }}>
        <Col span={lg ? 10 : 24} className={style.titleWrp}>
          {/* <Image src={BG} alt='bg' style={{ width: '100%' }} /> */}
          <Title level={3} className={style.firstTitle}>Обеспечиваем
            полный цикл
            разработки
            проекта
          </Title>
        </Col>
        <Col span={lg ? 14 : 24} className={style.cardsWrp}>
          <Paragraph>
            Kvando Technologies, Inc. — специализируется на разработке, тестировании и поддержке продукта. Среди наших проектов — разработка ПО для международной мультивалютной платежной системы с количеством юзеров 5 миллиардов человек, разработка части функционала клиентской массовой многопользовательской онлайн-игры в реальном времени с числом юзеров около 80 миллионов, международные fintech и healthtech проекты.
          </Paragraph>
          <div className={style.cards}>
            <div className={style.card}>
              <span className={style.num}>3+</span>
              <span className={style.desc}>года на рынке</span>
            </div>
            <div className={style.card}>
              <span className={style.num}>80+</span>
              <span className={style.desc}>завершенных проектов</span>
            </div>
            <div className={style.card}>
              <span className={style.num}>60+</span>
              <span className={style.desc}>компаний партнеров</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={40}>
        <Col span={lg ? 14 : 24} className={style.listWrp}>
          <List
            header={<h3>Главные плюсы работы с Kvando:</h3>}
            dataSource={data}
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
              <DownloadOutlined />Скачать презентацию
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
