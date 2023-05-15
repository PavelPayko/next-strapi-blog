import React from "react";
import Articles from "@/components/Articles/Articles";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import { fetchAPI } from "@/lib/api";
import PageTitle from '@/components/PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';
import { List } from 'antd';

const Home = () => {

  const router = useRouter();
  const { privacy: t } = router.locale === 'ru' ? ru : en;

  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <PageTitle title={t.title} />
      <List
        size="small"
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        // bordered
        style={{ padding: '20px 40px' }}
        dataSource={t.data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        split={false}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
