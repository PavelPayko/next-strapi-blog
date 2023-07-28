//@ts-nocheck
// eslint-disable-file
import React from 'react';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import Script from 'next/script';
import { YandexMetrika } from '@/components/YandexMetrika';

const MyDocument = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
      <Script id='metrika-counter' strategy='afterInteractive'>
        {`        (function (m, e, t, r, i, k, a) {
          m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
	})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${process.env.YM}, "init", {
          clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
	});`}
      </Script>
      <YandexMetrika />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default MyDocument;