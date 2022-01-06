import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <Link href="/">
          <a className="scale">
            <div className="inblo C">Copyright202222 © ちょうふのこやど All rights reserved.</div>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
