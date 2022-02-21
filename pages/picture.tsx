import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>ピクチャー - こやど</title>
        <meta name="description" content="ピクチャーのページです写真を載せています。" />
      </Head>
      <main className="margin resizeimage">
        <h1>Picture</h1>
        <div className="triangle-bottom" />
        <img src="/picture/ios2.jpg" />
        <img src="/picture/ios3.jpg" />
        <img src="/picture/ios4.jpg" />
      </main>
    </motion.div>
  );
};

export default NotFound;
