import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #212121;
  position: absolute;
  top: 0;
  left: 0%;
  min-width: 100vw;
  z-index: 10;
  padding: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-left: 15px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  font-weight: 600;
`;
