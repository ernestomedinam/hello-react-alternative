import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = (props) => {
	const location = useLocation();
    return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">{"React Boilerplate"}</span>
				</Link>
                {!location.pathname.includes("demo") && (
					<Link to="/demo" className="ms-auto btn btn-primary">
						{"Demo page"}
					</Link>
				)}
				{!location.pathname.includes("barn") && (
					<Link to="/barn" className="ms-2 btn btn-success">
						{"Check the barn!"}
					</Link>
				)}
			</div>
		</nav>
	);
};
