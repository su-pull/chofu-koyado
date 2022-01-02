import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="SideColumn-left">
        <div className="disableN">
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
                <ActiveLink href="/links" activeClassName="headerState">
                  <a className="scaleLinks">支援機関</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/syousai" activeClassName="headerState">
                  <a className="scaleLinks">会でやること</a>
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
