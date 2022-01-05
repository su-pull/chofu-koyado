import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>トップ - こやど</title>
        <meta name="description" content="トップ" />
      </Head>
      <main className="margin inblo">
        <h1>こやどの会トップ</h1>
        <div className="triangle-bottom" />
        <div>月1回のペースで開催されているこやどの会です。</div>
        <div>国の支援金やNPO、社会福祉協議会などによって成り立っています。</div>
      </main>
    </motion.div>
  );
};

export default Index;
