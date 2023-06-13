import "./App.css";

import { Outlet, Link } from "react-router-dom";

//To make our life easier, we can add a function ran by a button to fake logging the user out by remoing the loggedin variable from localstorage

function fakeLogoutUser() {
	localStorage.removeItem("loggedin");
}

export default function Layout() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="protected">Protected</Link>
				<Link to="login">Login</Link>
				<button onClick={fakeLogoutUser}>X</button>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}
