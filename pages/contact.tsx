import { useMail } from ".././hooks/useMail";
import { motion } from "framer-motion";
import Head from "next/head";

export const Contact: React.FC<HTMLTextAreaElement> = () => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>お問い合わせ - 調布のこやど</title>
        <meta name="description" content="コンタクト" />
      </Head>
      <main className="margin inblo">
   
        <div className="triangle-bottom" />
        <form>
          <h1>おといあわせ</h1>
          <dl>
            <dt>
              <label htmlFor="name">お名前*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setName(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="email">メールアドレス*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setMail(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="massage">メッセージ</label>
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
