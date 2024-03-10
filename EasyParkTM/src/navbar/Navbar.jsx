import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import '../assets/pozica.png';

const Navbar = ( email ) => {
  return (
    <Nav>
      <div className="navbar">
        <img style={{maxHeight: '49px', maxWidth: '44px'}} src='http://localhost/EasyParkTM/assets/ez_prk.png'/>
        <nav>
          <NavLink to={`/home/${email}/`}>
            Acasa
          </NavLink>
          <NavLink to={`/map/${email}/`}>
            Harta
          </NavLink>
          <NavLink to={`/contact/${email}/`}>
            Contact
          </NavLink>
          <NavLink to={`/ocupare/${email}/`}>
            Parcare
          </NavLink>
        </nav>
      </div>
    </Nav>
  );
};


export default Navbar;