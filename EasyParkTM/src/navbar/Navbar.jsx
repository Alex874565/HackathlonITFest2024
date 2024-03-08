import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = (username, email) => {
	return (
			<Nav>
				<NavMenu>
					<NavLink to={`/home/${username}/${email}/`}>
						Home
					</NavLink>
					<NavLink to={`/map/${username}/${email}/`}>
						Map
					</NavLink>
				</NavMenu>
			</Nav>
	);
};

export default Navbar;
