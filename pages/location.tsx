import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

const Location: React.FC = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

        <Head>
          <title>場所 - 調布のこやど</title>
          <meta name="description" content="トップ"/>
        </Head>
        <main>
          tsts
        </main>
      </motion.div>
    </Layout>
  );
}

export default Location;