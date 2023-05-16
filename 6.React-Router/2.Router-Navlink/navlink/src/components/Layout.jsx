import "../App.css";
//The first thing we did in this module is changing all the Link components to NavLink
import { NavLink, Outlet } from "react-router-dom";

// NavLink allows us to access something called "render props"
//If we want to, as an example, manage some visual feedback on our links such as using a class only when one of them is active, we just gained access to the object that has that property specifically

function Layout() {
	return (
		<>
			<h3>Welcome to my page!</h3>
			<nav>
				<NavLink
					to="/"
					//Our classname attribute is going to depend on a ternary of course
					//The attribute is a function which will receive the "render props" object
					//We have destructured it so that we can gain access to its isActive property (we could have written obj without {} and used dot notation such as obj.isActive)
					className={({ isActive }) => (isActive ? "selected-link" : null)}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? "selected-link" : null)}
				>
					About
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? "selected-link" : null)}
				>
					Contact
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;
