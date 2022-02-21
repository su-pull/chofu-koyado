import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="SideColumn-right menu">
        <nav>
          <ul className="nav1">
            <li>
              <ActiveLink href="/contact" activeClassName="headerState">
                <a className="scaleLinks">お問い合わせ</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/user-policy" activeClassName="headerState">
                <a className="scaleLinks">Twitter</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/user-policy" activeClassName="headerState">
                <a className="scaleLinks">Facebook</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/picture" activeClassName="headerState">
                <a className="scaleLinks">Picture</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideberLeft;
