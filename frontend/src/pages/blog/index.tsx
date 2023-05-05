import React from "react";
import Articles from "@/components/Articles/Articles";
import Layout from "@/components/layout";
// import Header from "../components/Header/Header";
import Seo from "@/components/seo";
import { fetchAPI } from "@/lib/api";
import Nav from "@/components/Nav/Nav";
import PageTitle from '@/components/PageTitle/PageTitle';
import BlogCategorySelect from '@/components/Blog/BlogCategorySelect/BlogCategorySelect';

const Home = ({ articles, categories, homepage }: any) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <PageTitle title='Блог' />
      <BlogCategorySelect categories={categories} />
      <Articles articles={articles} />

      {/* <Header /> */}
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
