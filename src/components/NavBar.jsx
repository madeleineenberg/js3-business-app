import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { Nav, NavList, NavItem, NavLink } from "../styled/Nav";
import { Logo } from "../styled/Heading";

export default function NavBar({ children }) {
  const userKit = new UserKit();
  const [token, setToken] = useState("");

  useEffect(() => {
    getToken();
  }, [getToken]);

  function getToken() {
    setToken(userKit.getToken());
  }
  return (
    <Nav>
      <Logo>Business Project</Logo>
      <NavList>
        <NavItem>
          <NavLink to="/">REGISTRATION</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">LOGIN</NavLink>
        </NavItem>
        {token && (
          <NavItem>
            <NavLink to="/home">HOME</NavLink>
          </NavItem>
        )}
      </NavList>

      {children}
    </Nav>
  );
}
