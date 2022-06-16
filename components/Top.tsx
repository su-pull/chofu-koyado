import React from "react";
import { Link as Scroll } from "react-scroll";

const Top = () => (
  <>
    <Scroll className="gotop" to="top" smooth={true} offset={0} duration={400} />
  </>
);

export default Top;
