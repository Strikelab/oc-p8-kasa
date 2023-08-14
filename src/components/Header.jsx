import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <Logo />
        {/* <img src={logo} alt="" /> */}
      </Link>

      <NavBar />
    </header>
  );
}
