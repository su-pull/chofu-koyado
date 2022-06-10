import ActiveLink from "./Sys/ActiveLink";

type BoolProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<BoolProps> = ({ open, setOpen }) => {
  return (
    <div className="MenuList">
      <div aria-expanded={open} onClick={() => setOpen(!open)}>
        <nav>
          <ul className="nav2">
            <li>
              <ActiveLink href="/" activeClassName="headerState">
                <a>トップ</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/picture" activeClassName="headerState">
                <a>ピクチャー</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/group" activeClassName="headerState">
                <a className="scale">共同ぐるーぷ</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
