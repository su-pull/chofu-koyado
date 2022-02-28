import { useMail } from ".././hooks/useMail";
import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

export const Contact: React.FC<HTMLTextAreaElement> = () => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <Framerdiv>
      <Head>
        <title>コンタクト - こやど</title>
        <meta name="description" content="コンタクト、お問い合わせはこちらから。" />
      </Head>
      <main className="margin inblo">
        <form>
          <h1>Contact</h1>
          <div className="triangle-bottom" />
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
    </Framerdiv>
  );
};

export default Contact;
