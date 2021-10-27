import ActiveLink from './Sys/ActiveLink'

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<Props> = ({ open, setOpen }) => {
    return (     
            <div className="MenuList">
            {/* 表示させとくから先に書く次のコードで新たに上書きして真偽値を書き換えて描写 */}
                    <div aria-expanded={open} onClick={() => setOpen(!open)}>
                        <div className="CN">
                            <nav>   
                                <ul className="nav2">                         
                                    <ActiveLink href="/" activeClassName="colorState"><a><li className="tate">ホーム</li></a></ActiveLink>
                                    <ActiveLink href="/about" activeClassName="colorState"><a><li className="tate">詳細</li></a></ActiveLink>
                                    <ActiveLink href="/location" activeClassName="colorState"><a><li className="tate">場所</li></a></ActiveLink>
                                    <ActiveLink href="/contact" activeClassName="colorState"><a><li className="tate">お問い合わせ</li></a></ActiveLink>
                                    <ActiveLink href="/links" activeClassName="colorState"><a><li className="tate">リンク</li></a></ActiveLink>
                                </ul> 
                            </nav>
                        </div>
                    </div>
            </div>
    );
};

export default Menu;