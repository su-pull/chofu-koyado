import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="SideColumn-right">
        <div className="disableN">
          <nav>
            <ul className="nav1">
              <li>
                <ActiveLink href="/contact" activeClassName="headerState">
                  <a className="scaleLinks">お問い合わせ</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/user-policy" activeClassName="headerState">
                  <a className="scaleLinks">サービス利用規約</a>
                </ActiveLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default SideberLeft;
