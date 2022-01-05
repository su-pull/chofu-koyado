import ActiveLink from "./Sys/ActiveLink";

type BoolProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<BoolProps> = ({ open, setOpen }) => {
  return (
    <div className="MenuList">
      <div aria-expanded={open} onClick={() => setOpen(!open)}>
        <div className="CN">
          <nav>
            <ul className="nav2">
              <li>
                <ActiveLink href="/" activeClassName="headerState">
                  <a>こやどの会トップ</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/about" activeClassName="headerState">
                  <a className="scale">開催予定場所</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/syousai" activeClassName="headerState">
                  <a>会の詳細</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/links" activeClassName="headerState">
                  <a className="scale">リンク</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/contact" activeClassName="headerState">
                  <a>お問い合わせ</a>
                </ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
