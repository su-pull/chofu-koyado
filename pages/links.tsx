import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Links: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>リンク - こやど</title>
        <meta name="description" content="リンクしています。" />
      </Head>
      <main className="margin inblo link">
        <h1>リンク</h1>
        <div className="triangle-bottom" />
        <ul>
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
        </li>
      </main>
    </Framerdiv>
  );
};

export default Links;
