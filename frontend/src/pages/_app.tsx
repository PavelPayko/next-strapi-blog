import App from "next/app";
import Head from "next/head";
// import "../styles/style.css";
import '@/styles/globals.css'
import { createContext } from "react";
import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { ConfigProvider } from 'antd';
import Nav from '@/components/Nav/Nav';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: any) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <ConfigProvider theme={{
        "token": {
          "colorPrimary": "#ffc500",
          fontSize: 16,
          fontFamily: 'Ubuntu'
        },
        components: {
          Menu: {
            paddingContentHorizontal: 40
          },
          Button: {
            controlHeightLG: 56,
            paddingContentHorizontal: 40,
          },
          Input: {
            colorBgContainer: '#F9F9F9',
            controlHeightLG: 56,
            borderRadiusLG: 12
          }
        }
      }}>
        <GlobalContext.Provider value={global.attributes}>
          <nav id='nav'><Nav /></nav>
          <main>
            <Component {...pageProps} />
          </main>
        </GlobalContext.Provider>
      </ConfigProvider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/homepage", {
    populate: {
      hero: { populate: { anotherCompo: { populate: "*" } } },
      seo: { populate: "*" },
    },
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;