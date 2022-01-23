import { motion } from "framer-motion";
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
            <a href="https://soradai.kenseikai-group.or.jp/" className="blue scaleLinks" target="_blank">
              空と大地と
            </a>
          </dd>
          <dd>
            <a href="https://www.tokyo-satsuki.jp/" className="satsuki scaleLinks" target="_blank">
              さつきホスピタル病院
            </a>
          </dd>
          <dd>
            <a className="tyairo scaleLinks" href="https://www.ccsw.or.jp" target="_blank">
              社会福祉協議会
            </a>
          </dd>
          <dd>
            <a className="tyairo scaleLinks" href="https://www.yamabousi.org/" target="_blank">
              認定NPO法人やまぼうし
            </a>
          </dd>
          <dd>
            <a className="green scaleLinks" href="https://ikizura-wh.jimdofree.com" target="_blank">
              生きづらわーほりプロジェクト
            </a>
          </dd>
          <dd>
            <a className="scaleLinks" target="_blank">
              <u>UX女子会</u>
            </a>
          </dd>
          <dd>
            <a className="scaleLinks" target="_blank">
              <u>ゆ〜るlinks</u>
            </a>
          </dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default Links;
