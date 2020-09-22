import React from "react";
import { Nav, NavList, NavItem, NavLink } from "../styled/Nav";
import { Logo } from "../styled/Heading";

export default function NavBar({ children }) {
  return (
    <Nav>
      <Logo>Business Project</Logo>
      <NavList>
        <NavItem>
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">LOGIN</NavLink>
        </NavItem>
      </NavList>

      {children}
    </Nav>
  );
}
