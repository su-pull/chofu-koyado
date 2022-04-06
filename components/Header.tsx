import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="menu">
        <nav>
          <ul className="nav1">
            <li>
              <ActiveLink href="/" activeClassName="headerState">
                <a className="scaleLinks">トップ</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/picture" activeClassName="headerState">
                <a className="scaleLinks">ピクチャー</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog" activeClassName="headerState">
                <a className="scaleLinks">イベント</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/links" activeClassName="headerState">
                <a className="scaleLinks">共同ぐるーぷ</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideberLeft;
