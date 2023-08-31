import React, { FC } from "react";
import Layout from "@/components/layout";
import PageTitle from '@/components/PageTitle/PageTitle';
import { Button, List } from 'antd';
import Link from 'next/link';
import style from './style.module.scss'
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const Home: FC = () => {
  const router = useRouter();
  const { mentoring: t } = router.locale === 'ru' ? ru : en;

  return (
    <Layout >
      <section className={style.container}>
        <PageTitle title={t.pageTitle} />
        <p>{t.desc}</p>
        <p>
          <List 
          header={t.list.header} 
          dataSource={t.list.data}
          renderItem={(item, i) => (
            <List.Item key={i}>{item.split(':')
              .map((str: string, i: number) => i === 0 ? <b>{str}: </b> : str
            )}
            </List.Item>
          )}
          size="small" />
        </p>
        <p>{t.test}</p>
        <Link href={'http://form-timer.com/start/58995d65'} target="_blank">
          <Button type="primary">
            {t.button}
          </Button>
        </Link>
      </section>
    </Layout >
  );
};

export async function getStaticProps() {

  return {
    props: {},
  };
}

export default Home;
