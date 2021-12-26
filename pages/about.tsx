import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'


const About: React.FC  = () => {
  return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>詳細 - 調布のこやど</title>
          <meta name="description" content="私について"/>
        </Head>
        <main className="textLeft CN">
          <h1>詳細</h1>
          <div className="triangle-bottom" />
          <dl>
            <dt>こやどの会のルール</dt>
            <dd>他人の意見を否定しないようにしましょう。</dd>
            <dt>初めての場合自己紹介しましょう</dt>
            <dd>パスしても大丈夫です。</dd>
            <dt>Thanks</dt>
            <dd>話したい人、喋りたい人と輪を作って話します<br />参加者の協力のもと成り立っています。</dd>
          </dl>
        </main>
      </motion.div>
  );
}

export default About;