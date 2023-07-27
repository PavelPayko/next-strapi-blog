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
import bg from '../../assets/images/about_bg.jpg'

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const About = ({ }) => {

  const { md, lg, xxl } = useBreakpoint();

  const router = useRouter();
  const { about: t } = router.locale === 'ru' ? ru : en;

  return (
    <section className={style.container} id='about'>
      <Row style={{ marginBottom: '40px' }}>
        <Col span={xxl ? 10 : 24} className={style.titleWrp}>
          <h3 className={style.firstTitle}>
            {t.title.toUpperCase().split('|').map((str, i) => <span key={`title-${i}`}>{str}</span>)}
          </h3>
          <p className={style.descWrp}>
            {t.desc.split('|').map((str, i) => <span key={`desc-${i}`}>{str}</span>)}
          </p>
          <div className={style.descListWrp}>
            <span>{t.descList.title}</span>
            <ul>
              {t.descList.data.map((str, i) => <li key={`descList-${i}`}>{str.split('|').map((str, i) => <span key={`descList-item-${i}`}>{str}</span>)}</li>)}
            </ul>
          </div>
        </Col>
        {xxl && <Col span={xxl ? 14 : 24} className={style.imageWrp}>
          <Image src={bg} width={1080} alt='bg' />
        </Col>}
      </Row>

      <Row className={style.cardsWrp}>
        <Col flex={1} >
          <div className={`${style.card} ${style.first}`}>
            <span className={style.num}>{t.cards.experience.num}</span>
            <span className={style.desc}>{t.cards.experience.desc}</span>
          </div>
        </Col>
        <Col flex={1} >
          <div className={style.card}>
            <span className={style.num}>{t.cards.projects.num}</span>
            <span className={style.desc}>{t.cards.projects.desc}</span>
          </div>
        </Col>
        <Col flex={1} >
          <div className={`${style.card} ${style.last}`}>
            <span className={style.num}>{t.cards.partners.num}</span>
            <span className={style.desc}>{t.cards.partners.desc}</span>
          </div>
        </Col>
      </Row>

      <div className={style.listWrp}>
        <span className={style.listTitle}>{t.list.title}</span>
        <ul className={style.list}>
          {t.list.data.map((card, i) => (
            <li className={style.desc} key={`list-${i}`}>{card}</li>
          ))}
          <li className={style.downloadButton}>
            <Button size={'large'} type='primary' className={style.downloadButton} style={{ height: '100%' }}>
              <Space>
                <DownloadOutlined />
                {t.downloadButton}
              </Space>
            </Button>
          </li>
        </ul>
      </div>
      <div className={style.content}>
      </div>
    </section >
  );
};

export default About;
