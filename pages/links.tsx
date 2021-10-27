import { motion } from "framer-motion";
import Layout from '../components/Layout/layout'
import Head from 'next/head'

const Links: React.FC = () => {
  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Head>
          <title>リンク - 調布のこやど</title>
          <meta name="description" content="リンク"/>
        </Head>
        <main className="CN">
          <h1>Links</h1>
            <div className="triangle-bottom" />
          <dl>
            <dd><a className="redLinks" href="/" target="_blank">.........</a></dd>
            <dd><a className="redLinks" href="/" target="_blank">.........</a></dd>
            <dd><a className="redLinks" href="/" target="_blank">.........</a></dd>
            <dd><a className="redLinks" href="/" target="_blank">.........</a></dd>
            <dd><a className="redLinks" href="/" target="_blank">.........</a></dd>
          </dl>
        </main>
      </motion.div>
    </Layout>
  );
}

export default Links;