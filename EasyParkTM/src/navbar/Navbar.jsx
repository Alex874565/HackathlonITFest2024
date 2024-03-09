import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from 'react-router-dom';

const Navbar = ({ username, email }) => {
  return (
    <Nav>
      <div className="navbar">
        <span>Your Logo</span>
        <nav>
          <Link to={`/home/${username}/${email}/`}>
            Home
          </Link>
          <Link to={`/map/${username}/${email}/`}>
            Map
          </Link>
          <Link to={`/contact/${username}/${email}`}>
            Contact
          </Link>
        </nav>
      </div>
    </Nav>
  );
};


export default Navbar;