import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  z-index: 20;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 100%;
`;
 
export const NavLink = styled(Link)`
color: white;
text-decoration: none;
margin: 0 16px;
  &:hover{
    text-decoration: underline;
  }
`;
 
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */

`;