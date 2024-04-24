import React from "react";
import Nav from "./nav";
import Logo from "./images/Boosted Enterprises.png"

export default function Main() {
  return (
    <>
      <Nav />
      <div className="intro">
        <img src={Logo} alt="placeholder" />
      </div>
    </>
  );
}
