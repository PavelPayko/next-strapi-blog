import React, { FC } from "react";
import Layout from "@/components/layout";
import PageTitle from '@/components/PageTitle/PageTitle';
import { Button } from 'antd';
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
