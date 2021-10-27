import ActiveLink from './Sys/ActiveLink'
import React from 'react';

const Header: React.FC = () => {
    return (
        <div>
            <header className="bgg">
                <div className="disableN">
                    <nav>           
                        <ul className="nav1">
                            <ActiveLink href="/" activeClassName="colorState"><a className="scale"><li>TOP</li></a></ActiveLink>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>About</li></a></ActiveLink>
                            <ActiveLink href="/about" activeClassName="colorState"><a className="scale"><li>場所</li></a></ActiveLink>
                            <ActiveLink href="/env" activeClassName="colorState"><a className="scale"><li>Dev/Env</li></a></ActiveLink>
                            <ActiveLink href="/links" activeClassName="colorState"><a className="scale"><li>Links</li></a></ActiveLink>
                        </ul>
                    </nav>  
                </div>
            </header>
        </div>
    );
}

export default Header;