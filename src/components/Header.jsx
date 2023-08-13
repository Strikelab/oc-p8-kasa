import React from "react";
import logo from "../assets/images/logo_kasa_color.svg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <NavBar />
    </header>
  );
}
