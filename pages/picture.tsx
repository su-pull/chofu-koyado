import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";

const NotFound: React.FC = () => {
  return (
    <Framerdiv>
      <Head>
        <title>ピクチャー - こやど</title>
        <meta name="description" content="ピクチャーのページです写真を載せています。" />
      </Head>
      <main className="resizeimage">
        <h1>Picture</h1>
        <div className="triangle-bottom" />
        <img src="/picture/ios2.jpg" />
        <img src="/picture/ios3.jpg" />
        <img src="/picture/ios4.jpg" />
      </main>
    </Framerdiv>
  );
};

export default NotFound;
