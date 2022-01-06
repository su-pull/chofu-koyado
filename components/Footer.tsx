import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <Link href="/">
          <a className="scale">
            <div className="inblo C">Copyright2022 © ちょうふのこやど All rights reserved.</div>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
