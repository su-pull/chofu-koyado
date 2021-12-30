import React, { useState, ReactNode } from "react";
import SideberLeft from "../SideberLeft";
import SideberRight from "../SideberRight";
import MenuButton from "../MenuButton";
import Menu from "../Menu";
import Text from "../Text";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <SideberLeft />
      <SideberRight />
      <Text />
      <div className="footerFix">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
