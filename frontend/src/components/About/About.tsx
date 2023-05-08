import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./About.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card, Typography, Divider, Row, Col, List, Space, Grid } from 'antd';
import { LikeOutlined, DollarOutlined, PlusOutlined, CheckOutlined, AppstoreAddOutlined, TeamOutlined, DownloadOutlined } from '@ant-design/icons';
// import YBG from '@/assets/images/YBG.png'
import BG from '@/assets/images/about.png'
import PageTitle from '../PageTitle/PageTitle';
// import Paragraph from 'antd/es/typography/Paragraph';

const { Meta } = Card;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const About = ({ }) => {

  const { lg } = useBreakpoint();

  console.log(lg)

  const data = [
    'Снижение затрат на обслуживание штатных сотрудников;',
    'Предложим Вам специалистов разного уровня под ваши требования.',
    'Гибкость в управлении персоналом;',
    'Гарантии и стабильность',
    'Увеличение расходов, отображаемых в бухгалтерском балансе, а значит снижение налогов на прибыль. ',
    'Отсутствие административной и финансовой нагрузки на компанию при фактическом руководстве сотрудниками',
    'Уменьшены риски возникновения страховых и прочих непредвиденных случаев с персоналом.',
    'Снятие с компании обязательств по трудовым спорам с сотрудниками;',
  ];

  return (
    <section className={style.container} id='about'>
      <PageTitle title='About' />
      <Row gutter={40} style={{ marginBottom: '40px' }}>
        <Col span={lg ? 10 : 24} className={style.titleWrp}>
          {/* <Image src={BG} alt='bg' style={{ width: '100%' }} /> */}
          <Title level={3} className={style.firstTitle}>Обеспечиваем
            полный цикл
            разработки
            проекта
          </Title>
          {/* <Title level={3}>полный цикл
          </Title>
          <Title level={3}>разработки</Title>
          <Title level={3}>проекта</Title> */}
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
            // footer={<div>Footer</div>}
            // bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                {/* <Typography.Text mark>[ITEM]</Typography.Text>  */}
                {/* <p className={style.item}> */}
                <Space size={16}>
                  <CheckOutlined />
                  {item}
                </Space>
                {/* </p> */}

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
