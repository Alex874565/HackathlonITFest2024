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
					<NavLink to={`/lore/${username}/${email}/`}>
						Lore
					</NavLink>
					<NavLink to={`/stats/${username}/${email}/`}>
						Statistics
					</NavLink>
					<NavLink to={`/history/${username}/${email}/`}>
						History
					</NavLink>
					<NavLink to={`/contact/${username}/${email}/`}>
						Contact
					</NavLink>
				</NavMenu>
			</Nav>
	);
};

export default Navbar;
