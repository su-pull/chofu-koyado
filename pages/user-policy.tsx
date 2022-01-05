import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const Links: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>利用規約/ルール - こやど</title>
        <meta name="description" content="リンク" />
      </Head>
      <main className="margin inblo">
        <h1>サービス利用案内</h1>
        <div className="triangle-bottom" />
        <dl>
          <h2>輪に馴染めない場合スタッフが話し相手になります。</h2>
          <h2>他の方の意見を否定しないように心がけましょう。</h2>
          <h2>思ってることはできるだけ声にしてみましょう。</h2>
          <h2>時間が以外と少ないので話し合いを大事にします。</h2>
        </dl>
      </main>
    </motion.div>
  );
};

export default Links;
