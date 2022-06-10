import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Links: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>リンク - こやど</title>
        <meta name="description" content="リンクしています。" />
      </Head>
      <main className="textLeft margin inblo link">
        <h1 className="text-2xl">家族会「やまぼうし」の紹介です</h1>
        <p>
          家族会「やまぼうし」では、ひきこもりの子どもを持つ親や支援者が集まり、
          <br />
          懇談会や専門の講師を招いて学習会を開催しています。
        </p>
        <p>時には「元ひきこもっていた当事者の方」も参加してくださることがあり、双方向の対話で会は以前より活発になってきています。</p>
        <p>当事者も親も自分を責めてしまい、友人・知人との交流が疎遠になり孤立しがちになっていることもあります。</p>
        <p>そんなとき、家族会「やまぼうし」に顔を出してみませんか。</p>
        <p>安心できる居場所としての「やまぼうし」で苦しい気持ちを吐き出し、自分 を受容されていつのまにか笑顔でいることに気が付くことが多くなっています。</p>
        <br />
        <p>「開催日時」: 毎月第2土曜日 ９：００～１２：００</p>
        <p>「開催場所」: 調布市こころの健康支援センター</p>
        <p>「問合せ先」: 調布市社会福祉協議会 地域福祉コーディネーター TEL: 042-481-7693</p>
      </main>
    </Framerdiv>
  );
};

export default Links;
