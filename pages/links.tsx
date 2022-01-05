import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const Links: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>リンク - こやど</title>
        <meta name="description" content="リンク" />
      </Head>
      <main className="CN">
        <h1>リンク</h1>
        <div className="triangle-bottom" />
        <dl>
          <dd>
            <a className="redLinks scaleLinks" href="https://www.ccsw.or.jp" target="_blank">
              社会福祉協議会
            </a>
          </dd>
          <dd>
            <a className="redLinks scaleLinks" href="https://ikizura-wh.jimdofree.com" target="_blank">
              生きづらわーほりプロジェクト
            </a>
          </dd>
          <dd>
            <a className="redLinks scaleLinks" href="/" target="_blank">
              引きこもり家族会やまぼうし
            </a>
          </dd>

          <dd>
            <a className="redLinks scaleLinks" href="/" target="_blank">
              UX女子会
            </a>
          </dd>
          <dd>
            <a className="redLinks scaleLinks" href="/" target="_blank">
              ゆ〜るlinks
            </a>
          </dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default Links;
