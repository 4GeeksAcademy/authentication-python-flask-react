import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

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
						<button className="btn btn-secondary mx-2">Log In</button>
					</Link>

					{store.token && (
                    <button onClick={actions.logout} className="btn btn-danger">Log Out</button>
                	)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
