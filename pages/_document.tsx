// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../libs/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="JA">
        <Head>
          <link href="/azur.ico" rel="icon" />
          <link href="https://fonts.googleapis.com/css2?family=Yomogi&display=swap" rel="stylesheet" />
          {GA_TRACKING_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
