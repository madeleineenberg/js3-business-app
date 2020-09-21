import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavList, NavItem, NavLink } from "../styled/Nav";

export default function NavBar({ children }) {
  return (
    <Nav>
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
