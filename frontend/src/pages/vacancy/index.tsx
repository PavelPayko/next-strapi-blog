import React, { FC, useState } from "react";
import Articles from "@/components/Articles/Articles";
import Layout from "@/components/layout";
// import Header from "../components/Header/Header";
import Seo from "@/components/seo";
import { fetchAPI } from "@/lib/api";
import Nav from "@/components/Nav/Nav";
import PageTitle from '@/components/PageTitle/PageTitle';
import { Button, Col, Descriptions, Grid, List, Menu, MenuProps, Row, Space, Tabs, Typography } from 'antd';
import Link from 'next/link';
import style from './style.module.scss'
import { ArrowUpOutlined, ArrowsAltOutlined, CodeOutlined, ExpandAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import Tg from '@/assets/svg/Tg'
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const { Panel } = Collapse;
const { useBreakpoint } = Grid;

export interface Vacancy {
  id: number;
  attributes: {
    title: string;
    responsibilities: string;
    requirements: string;
    conditions: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    genitive: string;
    localizations: Localizations;
    workType: string;
    slug: string;
  }

}

interface Localizations {
  data: any[];
}

const Home: FC<{
  vacancies: Vacancy[]
}> = ({ vacancies }) => {

  console.log('vacancies', vacancies);


  const { Text, Title, Paragraph } = Typography

  const router = useRouter();
  const { vacancy: t } = router.locale === 'ru' ? ru : en;
  const { md } = useBreakpoint()

  console.log('vacancies', vacancies);
  const [current, setCurrent] = useState('all');

  const items: MenuProps['items'] = [
    {
      label: 'Все',
      key: 'all',
      // icon: <MailOutlined />,
    },
    {
      label: 'Разработка',
      key: 'dev',
      // icon: <AppstoreOutlined />,
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout >
      <section className={style.container}>
        <PageTitle title={t.pageTitle} />
        <div className={style.desc}>{t.desc}</div>
        <List
          // pagination={{ position, align }}
          dataSource={vacancies}
          renderItem={(item, index) => (
            <Link href={`vacancy/${item.attributes.slug}`} >
              <List.Item style={{ padding: '30px' }} className={style.item}>
                <div>{item.attributes.title}</div>
                {md && <div className={style.type}>{item.attributes.workType}</div>}
                <div className={style.arrow}><ArrowUpOutlined /></div>
              </List.Item>
            </Link>
          )}
          className={style.list}
        />
      </section>
    </Layout >
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [vacanciesRes] = await Promise.all([

    fetchAPI("/vacancies", { populate: "*" }),
  ]);

  return {
    props: {
      vacancies: vacanciesRes.data
    },
    revalidate: 1,
  };
}

export default Home;
