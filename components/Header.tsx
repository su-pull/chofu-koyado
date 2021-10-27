import ActiveLink from './Sys/ActiveLink'
import React from 'react';

const Header: React.FC = () => {
    return (
        <div>
            <header className="bgg">
                <div className="disableN">
                    <nav>           
                        <ul className="nav1">
                            <ActiveLink href="/" activeClassName="colorState"><a className="scale"><li>トップ</li></a></ActiveLink>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>詳細</li></a></ActiveLink>
                            <ActiveLink href="/location" activeClassName="colorState"><a className="scale"><li>場所</li></a></ActiveLink>
                            <ActiveLink href="/contact" activeClassName="colorState"><a className="scale"><li>お問い合わせ</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>リンク</li></a></ActiveLink>
                        </ul>
                    </nav>  
                </div>
            </header>
        </div>
    );
}

export default Header;