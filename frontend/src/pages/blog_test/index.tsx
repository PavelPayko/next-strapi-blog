import React, { Suspense } from "react";
import Articles from "@/components/Articles/Articles";
import Layout from "@/components/layout";
import Seo from "@/components/seo";
import { fetchAPI } from "@/lib/api";
import PageTitle from '@/components/PageTitle/PageTitle';
import BlogCategorySelect from '@/components/Blog/BlogCategorySelect/BlogCategorySelect';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';
import Loading from './loading';
import { Empty } from 'antd';

const Home = ({ articles, categories, homepage }: any) => {

  const router = useRouter();
  const { blog: t } = router.locale === 'ru' ? ru : en;

  // return <Empty style={{ marginTop: '40px' }} />;

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <PageTitle title={t.pageTitle} />
      <BlogCategorySelect title={t.category} categories={categories} />
      <Suspense fallback={<Loading />}>
        <Articles articles={articles} />
      </Suspense>
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
