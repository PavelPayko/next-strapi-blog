import React from "react";
import Articles from "../components/Articles/Articles";
import Layout from "../components/layout";
import Header from "../components/Header/Header";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Team from "@/components/Team/Team";
import Contacts from "@/components/Contacts/Contacts";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

const Home = ({ articles, categories, homepage, frontenders, contacts }) => {
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
      <Team frontenders={frontenders} />
      <Contacts contacts={contacts} />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes, frontendersRes] =
    await Promise.all([
      fetchAPI("/articles", { populate: ["image", "category"] }),
      fetchAPI("/categories", { populate: "*" }),
      fetchAPI("/homepage", {
        populate: {
          hero: "*",
          seo: { populate: "*" },
        },
      }),
      fetchAPI("/frontenders", { populate: "*" }),
    ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      frontenders: frontendersRes.data,
      contacts: frontendersRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
