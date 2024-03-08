import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  z-index: 20;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0px;
`;
 
export const NavLink = styled(Link)`
  border-right: 2px solid rgb(96, 45, 20);
  border-left: 2px solid rgb(96, 45, 20);
  border-top: 2px solid rgb(96, 45, 20);
  border-bottom: 2px solid rgb(96, 45, 20);
  padding-left: 111.23px;
  padding-right: 111.23px;
  padding-bottom: 25px;
  padding-top: 25px;
  margin: 0px;
  color: rgb(96, 45, 20);
  font-family: "Rocky";
  font-size: 33px;
  font-weight: 1000;
  background-color: rgb(255, 223, 177, 1);
  &.active {
    border-color: rgb(255, 223, 177, 1);
    background-color: rgb(96, 45, 20);
    color: rgb(251, 233, 187, 1);
  }
  &:hover{
    border-color: rgb(255, 223, 177, 1);
    background-color: rgb(96, 45, 20);
    color: rgb(251, 233, 187, 1); 
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