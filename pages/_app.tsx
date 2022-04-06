import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import "../styles/mobile.scss";
import Head from "next/head";
import Layout from "../components/Layout/layout";
import { GA_TRACKING_ID, pageview } from "../libs/gtag";
import { useEffect } from "react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }): JSX.Element => {
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default MyApp;
