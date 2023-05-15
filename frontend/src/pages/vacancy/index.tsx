import React, { useState } from "react";
import Articles from "@/components/Articles/Articles";
import Layout from "@/components/layout";
// import Header from "../components/Header/Header";
import Seo from "@/components/seo";
import { fetchAPI } from "@/lib/api";
import Nav from "@/components/Nav/Nav";
import PageTitle from '@/components/PageTitle/PageTitle';
import { Button, Col, Descriptions, List, Menu, MenuProps, Row, Space, Tabs, Typography } from 'antd';
import Link from 'next/link';
import style from './style.module.scss'
import { ArrowsAltOutlined, CodeOutlined, ExpandAltOutlined, ShrinkOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import Tg from '@/assets/svg/Tg'
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const { Panel } = Collapse;

const Home = ({ articles, categories, homepage, vacancies }: any) => {

  const { Text, Title, Paragraph } = Typography

  const router = useRouter();
  const { vacancy: t } = router.locale === 'ru' ? ru : en;

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
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <PageTitle title={t.pageTitle} />

      <Row gutter={16} className={style.container}>
        {/* <Col span={4}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} style={{ width: 256 }} />

        </Col> */}
        <Col span={24}>
          <Paragraph >
            <div dangerouslySetInnerHTML={{ __html: t.introduction }} />
          </Paragraph>
          <Collapse
            bordered={false}
            // ghost
            expandIcon={({ isActive }) => isActive
              ? <ShrinkOutlined style={{ fontSize: '30px' }} />
              : <ArrowsAltOutlined style={{ fontSize: '30px' }} />
            }>
            {vacancies.map((item: any) => <Panel
              header={<div className={style.content}>
                <Title level={4}>{item.attributes.title}</Title >
              </div>}
              key={item.id}
            >
              <Descriptions layout='vertical' column={1} className={style.desc}>
                <Descriptions.Item label={t.responsibilities} >
                  {item.attributes?.responsibilities}
                </Descriptions.Item>
                <Descriptions.Item label={t.requirements}>
                  {item.attributes?.requirements}
                </Descriptions.Item>
                <Descriptions.Item label={t.conditions}>
                  {item.attributes?.conditions}
                </Descriptions.Item>
                <Descriptions.Item>
                  <Title level={5}>{t.conclusion}</Title>
                </Descriptions.Item>
                <Descriptions.Item >
                  <Link href={'https://t.me/ValeriBondareva'}>
                    <Button type='primary' className={style.btn} style={{ color: '#000' }} size='large'>
                      {t.respondButton} <Tg color='#000' />
                    </Button>
                  </Link>
                </Descriptions.Item>

              </Descriptions>
            </Panel>)
            }
            {/* <Panel header="This is panel header 1" key="1">
              {text}
            </Panel>
            <Panel header="This is panel header 2" key="2">
              {text}
            </Panel>
            <Panel header="This is panel header 3" key="3">
              {text}
            </Panel> */}
          </Collapse></Col>
      </Row>

    </Layout >
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes, vacanciesRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/vacancies", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      vacancies: vacanciesRes.data
    },
    revalidate: 1,
  };
}

export default Home;
