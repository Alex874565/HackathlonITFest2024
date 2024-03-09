import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ( username, email ) => {
  return (
    <Nav>
      <div className="navbar">
        <span>Your Logo</span>
        <nav>
          <NavLink to={`/home/${username}/${email}/`}>
            Home
          </NavLink>
          <NavLink to={`/map/${username}/${email}/`}>
            Map
          </NavLink>
          <NavLink to={`/contact/${username}/${email}/`}>
            Contact
          </NavLink>
        </nav>
      </div>
    </Nav>
  );
};


export default Navbar;