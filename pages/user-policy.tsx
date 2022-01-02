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
        <title>利用規約/ルール - こやど</title>
        <meta name="description" content="リンク" />
      </Head>
      <main className="margin inblo">
        <h1>利用規約</h1>
        <div className="triangle-bottom" />
        <ul>
          <li>他の方の意見を否定しないでください</li>
          <li>思ってることはできるだけ声にしましょう</li>
          <li></li>
        </ul>
      </main>
    </motion.div>
  );
};

export default Links;
