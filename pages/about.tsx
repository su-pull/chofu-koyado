import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const Location: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>開催予定場所 - こやど</title>
        <meta name="description" content="リンク" />
      </Head>
      <main className="CN">
        <h1>開催場所</h1>
        <div className="triangle-bottom" />
        <dl>
          <h2>東京(Tokyo)</h2>
          <br />
          <h2>
            <a
              href="https://www.tokyo-satsuki.jp/"
              className="satsuki"
              target="_blank"
            >
              さつきホスピタル病院
            </a>
            <div className="Kaiten inblo">前</div>. . .
            <a
              href="https://soradai.kenseikai-group.or.jp/"
              className="blue"
              target="_blank"
            >
              空と大地と(カフェ)
            </a>{" "}
          </h2>
          <p>詳細の所在地 : 〒182-0005 東京都 調布市東つつじヶ丘2-27-1</p>
          <p>駅より徒歩7分</p>
          <p>
            普段はカフェとして営業中です。美味しいのでぜひ足をお運びください。
          </p>
        </dl>
      </main>
    </motion.div>
  );
};

export default Location;
