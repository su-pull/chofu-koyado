import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>トップ - こやど</title>
        <meta name="description" content="トップページです。" />
      </Head>
      <main className="margin inblo">
        <h1>こやどの会トップ</h1>
        <div className="triangle-bottom" />
        <div>月1回のペースで開催されているこやどの会です。</div>
        <div>国の支援金やNPO、社会福祉協議会などによって成り立っています。</div>
        <br />
        <div>ひきこもりや生きづらさを抱える当事者の方が集まる場を作っています。。</div>
        <div>当時者の横のつながりを作れる会を目指しています。</div>
        <br />
        <div>参加費は寄付方式となっております。受付に寄付袋（箱）を置いていますので、イベント終了時に金銭的に余裕がある方は協力をお願いします。</div>
      </main>
    </Framerdiv>
  );
};

export default Index;
