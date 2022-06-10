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
          <br />
          時には″元ひきこもっていた当事者の方″も参加してくださることがあり、双方向の対話で会は以前より活発になってきています。
          <br />
          当事者も親も自分を責めてしまい、友人・知人との交流が疎遠になり孤立しがちになっていることもあります。
          <br />
          そんなとき、家族会「やまぼうし」に顔を出してみませんか。
          <br />
          安心できる居場所としての「やまぼうし」で苦しい気持ちを吐き出し、自分 を受容されていつのまにか笑顔でいることに気が付くことが多くなっています。
        </p>
        <br />
        <p>[開催日時]: 毎月第2土曜日 ９：００～１２：００</p>
        <p>[開催場所]: 調布市こころの健康支援センター</p>
        <p>[問合せ先]: 調布市社会福祉協議会 地域福祉コーディネーター TEL: 042-481-7693</p>

        {/* <ul>
          <li>
            <a href="https://soradai.kenseikai-group.or.jp/" className="blue scaleLinks" target="_blank">
              空と大地と
            </a>
          </li>
          <li>
            <a href="https://www.tokyo-satsuki.jp/" className="satsuki scaleLinks" target="_blank">
              さつきホスピタル病院
            </a>
          </li>
          <li>
            <a className="tyairo scaleLinks" href="https://www.ccsw.or.jp" target="_blank">
              社会福祉協議会
            </a>
          </li>
          <li>
            <a className="tyairo scaleLinks" target="_blank">
              <u>家族会やまぼうし</u>
            </a>
          </li>
          <li>
            <a className="green scaleLinks" href="https://ikizura-wh.jimdofree.com" target="_blank">
              生きづらわーほりプロジェクト
            </a>
          </li>
          <li>
            <a className="scaleLinks" target="_blank">
              <u>UX女子会</u>
            </a>
          </li>
          <li>
            <a className="scaleLinks" target="_blank">
              <u>ゆ〜るlinks</u>
            </a>
          </li>
        </ul>
        <h1>ソーシャルネットワーク( 追加予定 )</h1>
        <li>
          <a className="scaleLinks">
            <u>Twitter</u>
          </a>
        </li>
        <li>
          <a className="scaleLinks">
            <u>Facebook</u>
          </a>
        </li> */}
      </main>
    </Framerdiv>
  );
};

export default Links;
