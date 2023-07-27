import App from "next/app";
import Head from "next/head";
// import "../styles/style.css";
import '@/styles/globals.css'
// import 'antd/dist/antd.min.js'
import { createContext, useEffect } from "react";
import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { Button, ConfigProvider, notification } from 'antd';
import Nav from '@/components/Nav/Nav';
import theme from '@/theme/themeConfig';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/router';
import { Locale } from 'antd/es/locale';
import ru_RU from 'antd/locale/ru_RU';
import en_US from 'antd/locale/en_US';

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

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: any) => {
  const { global } = pageProps;

  const [api, contextHolder] = notification.useNotification({ maxCount: 1 });
  const router = useRouter()

  const locale: Locale = router.locale === 'en' ? en_US : ru_RU

  useEffect(() => {
    // const cookieStore = cookies()
    // const policy = cookieStore.get('cookies_policy')
    console.log('render');

    const policy = getCookie('cookies_policy')
    const key = `notification-${Date.now()}`

    const message = <span className='notification-msg'>Мы используем файлы cookies для улучшения работы сайта. Оставаясь на нашем сайте, вы соглашаетесь с условиями
      использования файлов cookies. <a href="legal/confidential" target="_blank">Подробнее</a>.</span>
    const confirmHandler = () => {
      setCookie('cookies_policy', 'true', 365)
      api.destroy(key)
    }

    if (!policy) {
      api.open({
        message,
        btn: <Button type="primary" onClick={confirmHandler}>
          Я согласен
        </Button>,
        duration: 0,
        key,
      });
    }
  }, [])

  return (
    <div className='app'>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ConfigProvider theme={theme} locale={locale}>
        {contextHolder}
        <GlobalContext.Provider value={global.attributes}>
          <nav id='nav'><Nav /></nav>
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </GlobalContext.Provider>
      </ConfigProvider>
    </div>
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