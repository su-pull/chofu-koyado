import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="SideColumn-left menu">
        <nav>
          <ul className="nav1">
            <li>
              <ActiveLink href="/" activeClassName="headerState">
                <a className="scaleLinks">ちょうふのこやどトップ</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about" activeClassName="headerState">
                <a className="scaleLinks">開催予定場所</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/syousai" activeClassName="headerState">
                <a className="scaleLinks">会でやること詳細</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/links" activeClassName="headerState">
                <a className="scaleLinks">リンク</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog" activeClassName="headerState">
                <a className="scaleLinks">ブログ</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideberLeft;
