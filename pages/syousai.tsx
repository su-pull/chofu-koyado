import { motion } from "framer-motion";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>会でやること - こやど</title>
        <meta name="description" content="私について" />
      </Head>
      <main className="margin inblo textLeft">
        <h1>会でやること〜進め方について〜</h1>
        <ul>
          <p>① 簡単な自己紹介と近況を順番にみんなで一周します。</p>
          <p>② その後はみんなで自由に話していきます。</p>
          <p>話したいこと、聞きたいこと、仕 事の話（悩みや相談など）趣味の話でも社会問題の話でも自由に話していきましょう。</p>
          <h2>※みんながお話できるよう、お話しをする際の長さは5分くらいまでにしましょう</h2>
          <li>会場の一角にフリースペースを設けていますので疲れた場合などご自由に休憩してください。</li>
          <li>入退室は自由です。遅れての参加や早めの退席も構いません。</li>
          <li>話し合いの最中に何かあればすぐに遠慮なくスタッフ(運営)にご申し付けください。</li>

          <h2>*注意事項*</h2>
          <li>参加者が話したことを批判しないようにしてください。</li>
          <li>本イベントに関してブログやSNS等での情報発信していただいて構いませんが、個人情報や個人が特定できるような内容については掲載しないようにしてください。</li>
          <li>主催団体の告知用としてスタッフがイベントの様子を写真撮影させていただきます。(顔は映さないのですが後ろ姿もNGな場合申告してもらえると助かります)</li>
          <li>
            <u>宗教並びにネットワークビジネスの勧誘の方の</u>ご参加は遠慮させていただいております。
          </li>
        </ul>
      </main>
    </motion.div>
  );
};

export default About;
