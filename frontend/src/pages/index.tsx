import React, { FC, useEffect } from "react";
import Articles from "../components/Articles/Articles";
import Layout from "../components/layout";
import Header from "../_components/Header/Header";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Team from "@/components/Team/Team";
import Contacts from "@/components/Contacts/Contacts";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import { cookies } from 'next/headers'
import { Button, notification } from 'antd';

const setCookie = (name: string, value: string, days: number) => {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export const getCookie = (name: string) => {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const Home: FC<any> = ({
  articles,
  categories,
  homepage,
  developers,
  contacts,
  gallery,
}) => {


  return (
    <Layout categories={categories}>

      <Seo seo={homepage.attributes.seo} />
      {/* <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div> */}
      <Header />
      <About />
      <Projects />
      <Gallery gallery={gallery} />
      <Team developers={developers} />
      <Contacts contacts={contacts} />
      <ContactForm />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articlesRes,
    categoriesRes,
    homepageRes,
    developersRes,
    commercialsRes,
    galleryRes,
  ] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/developers", { populate: "*" }),
    fetchAPI("/commercials", { populate: "*" }),
    fetchAPI("/galleries", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      developers: developersRes.data,
      contacts: commercialsRes.data,
      gallery: galleryRes.data[0],
    },
    revalidate: 1,
  };
}

export default Home;
