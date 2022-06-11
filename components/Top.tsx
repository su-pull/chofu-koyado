import React from "react";
import { Link as Scroll } from "react-scroll";

const Top = () => (
  <Scroll to="top" smooth={true} offset={0} duration={400}>
    <div className="gotop" />
  </Scroll>
);

export default Top;
