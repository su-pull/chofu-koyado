import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>会でやること - 調布のこやど</title>
        <meta name="description" content="私について" />
      </Head>
      <main className="CN">
        <h1>詳細</h1>
        <p>
          話し合いの最中に何かあれば遠慮なくスタッフ(運営)にすぐにご報告ください。
        </p>
        <dl>参加者と協力のもとで成り立っています。</dl>
      </main>
    </motion.div>
  );
};

export default About;
