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

const { Panel } = Collapse;

const Home = ({ articles, categories, homepage, vacancies }: any) => {

  const { Text, Title } = Typography

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
      <PageTitle title='Vacancy' />

      <Row gutter={16} className={style.container}>
        <Col span={4}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} style={{ width: 256 }} />

        </Col>
        {/* <Col >
          <List
            itemLayout="horizontal"
            size='large'
            dataSource={vacancies}
            renderItem={(item: any, index) => (
              <Link href={`vacancy/${item.id}`}>
                <List.Item
                  actions={[<Button >Откликнуться</Button>]}
                >
                  <List.Item.Meta
                    avatar={<CodeOutlined style={{ fontSize: '30px' }} />}
                  // title={item.attributes.name}
                  // description={item.attributes.type}
                  />
                  <div className={style.content}>
                    <Text>{item.attributes.name}</Text>
                    <Text type="secondary">{item.attributes.type}</Text>
                    <Text type="secondary">{item.attributes.category}</Text>
                  </div>
                </List.Item>
              </Link>
            )}
          />
        </Col> */}
        <Col span={20}>
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => isActive
              ? <ShrinkOutlined style={{ fontSize: '30px' }} />
              : <ArrowsAltOutlined style={{ fontSize: '30px' }} />
            }>
            {vacancies.map((item: any) => <Panel
              header={<div className={style.content}>
                <Title level={4}>{item.attributes.name}</Title >
                <Text type="secondary">{item.attributes.type}</Text>
                <Text type="secondary">{item.attributes.category}</Text>
              </div>}
              key={item.id}
            >
              <Descriptions title="Desc" layout='vertical' column={1}>
                <Descriptions.Item label="Какие знания необходимы">
                  - опыт работы с JS;
                  - опыт работы с React или Vue желателен;
                  -опыт работы с TypeScript желателен;
                  -желателен опыт с Linux и облачными технологиями (Docker, CF/K8s, Git);
                </Descriptions.Item>
                <Descriptions.Item label="Успешному кандидату мы предлагаем:">
                  -своевременная выплата заработной платы
                  -достойный уровень оплаты труда, выше рынка;
                  -интересные задачи и проекты, перспективы карьерного роста и развития;
                  -лояльное руководство;
                  -комфортное, полностью укомплектованное рабочее место. Современная техника и КО.
                  -чай/кофе, кухня, комната отдыха в офисе;
                  -уютный, современный офис в бизнес-центре в 2 минутах от Кургана;
                  -комфортный график работы: выбираете время начала работы с 9-00-10-00. Восьмичасовой рабочий день, 5/2, выходные - суббота и воскресенье;
                  -молодой, дружный коллектив;
                  -корпоративная жизнь компании;
                </Descriptions.Item>
                <Descriptions.Item label="Что по проектам?">
                  Kvando классическая аутстафф компания. Подберем проект и будем всегда на Вашей стороне.
                </Descriptions.Item>
                <Descriptions.Item >
                  <Link href={'https://t.me/ValeriBondareva'}>
                    <Button type='primary' className={style.btn} style={{ color: '#000' }} size='large'>
                      Откликнуться <Tg color='#000' />
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



      {/* <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div> */}
      {/* <Header /> */}
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
