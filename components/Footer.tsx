import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <Link href="/">
          <a className="blue C">Copyright2022 © ちょうふのこやど All rights reserved.</a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
