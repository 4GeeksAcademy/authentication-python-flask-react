import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-primary mx-2">Sign Up</button>
					</Link>

					<Link to="/login">
						<button className="btn btn-secondary">Log In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;