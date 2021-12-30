import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const Links: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>リンクス - こやど</title>
        <meta name="description" content="リンク" />
      </Head>
      <main className="CN">
        <h1>Links</h1>
        <div className="triangle-bottom" />
        <dl>
          <dd>
            <a
              className="redLinks"
              href="https://ikizura-wh.jimdofree.com"
              target="_blank"
            >
              生きづらわーほりプロジェクト
            </a>
          </dd>
          <dd>
            <a className="redLinks" href="/" target="_blank">
              引きこもり家族会やまぼうし
            </a>
          </dd>

          <dd>
            <a className="redLinks" href="/" target="_blank">
              UX女子会
            </a>
          </dd>
          <dd>
            <a className="redLinks" href="/" target="_blank">
              ゆ〜るlinks
            </a>
          </dd>
          <dd>
            <a
              className="redLinks"
              href="https://www.ccsw.or.jp"
              target="_blank"
            >
              社会福祉協議会(提供)
            </a>
          </dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default Links;
