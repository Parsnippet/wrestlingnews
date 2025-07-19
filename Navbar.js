import React from "react";
import { Nav, NavLink } from "../styles/NavStyles";

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
}