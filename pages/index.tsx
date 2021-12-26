import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>ホーム - こやど</title>
        <meta name="description" content="トップ" />
      </Head>
      <main className="textLeft CN">
        <h1>こやどの会トップ</h1>
        <div>
          生きずらわーほりプロジェクトの行事で開催されているこやどの会です。
        </div>
        <div>国の支援金やNPO、社会福祉協議会などによって成り立っています。</div>
      </main>
    </motion.div>
  );
};

export default Index;
