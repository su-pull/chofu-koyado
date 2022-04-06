import React, { useState, ReactNode } from "react";
import Header from "../Header";
import MenuButton from "../MenuButton";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";
import Top from "components/Top";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Header />
      <Text />
      <div className="footerFix">{children}</div>
      <Top />
      <Footer />
    </>
  );
};

export default Layout;
