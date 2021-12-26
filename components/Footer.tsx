import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <div>
            <footer>
                <Link href="/">
                    <a className="scale">
                        <div className="inblo C">Copyright ©2021 こやどの会</div>
                    </a>
                </Link>
            </footer>
        </div>
    );
}

export default Footer;