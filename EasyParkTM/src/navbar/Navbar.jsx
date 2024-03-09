import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import '../assets/pozica.png';

const Navbar = ( username, email ) => {
  return (
    <Nav>
      <div className="navbar">
        <img style={{maxHeight: '49px', maxWidth: '44px'}} src='http://localhost/EasyParkTM/assets/ez_prk.png'/>
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
          <NavLink to={`/ocupare/${username}/${email}/`}>
            Parcare
          </NavLink>
        </nav>
      </div>
    </Nav>
  );
};


export default Navbar;