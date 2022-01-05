import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="SideColumn-right">
        <nav>
          <ul className="nav1">
            <li>
              <ActiveLink href="/contact" activeClassName="headerState">
                <a className="scaleLinks">お問い合わせ</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/user-policy" activeClassName="headerState">
                <a className="scaleLinks">サービス利用案内</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideberLeft;
