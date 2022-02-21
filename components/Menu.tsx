import ActiveLink from "./Sys/ActiveLink";

type BoolProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<BoolProps> = ({ open, setOpen }) => {
  return (
    <div className="MenuList">
      <div aria-expanded={open} onClick={() => setOpen(!open)}>
        <div className="CN menu">
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
                <ActiveLink href="/contact" activeClassName="headerState">
                  <a>Contact</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/picture" activeClassName="headerState">
                  <a>Picture</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/blog" activeClassName="headerState">
                  <a>Blog</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/links" activeClassName="headerState">
                  <a className="scale">Link</a>
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
