import "./App.css";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="weather">Weather</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}
