import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
    return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">{"React Boilerplate"}</span>
				</Link>
                <Link to="/demo" className="ml-auto btn btn-primary">
                    {"Check the demo page!"}
                </Link>
			</div>
		</nav>
	);
};
