import { useMail } from ".././hooks/useMail";
import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

export const Contact: React.FC<HTMLTextAreaElement> = () => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>お問い合わせ - 調布のこやど</title>
        <meta name="description" content="コンタクト" />
      </Head>
      <main className="CN">
        <h1>おといあわせ</h1>
        <div className="triangle-bottom" />
        <form>
          <dl>
            <dt>
              <label htmlFor="name">おなまえ*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setName(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="email">めーるあどれす*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setMail(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="massage">めっせーじ</label>
            </dt>
            <dd>
              <textarea name="massage" aria-label="Massage area" onChange={(e) => setMessage(e.target.value)} required />
            </dd>
            <dd>
              <button id="massageButton" type="submit" onClick={send}>
                送る
              </button>
            </dd>
          </dl>
        </form>
      </main>
    </motion.div>
  );
};

export default Contact;
