import "./App.css";
import { Outlet, useSearchParams } from "react-router-dom";
import { requireAuth } from "./utils";

//We currently have the problem of redirecting the user to the correct path when he logs in if he ever has been logged out while accessing a nested route path in the protected route
//The strategy is passing the path information through the url by using the useSearchParams hook

//We will grab the request native browser object
export async function loader({ request }) {
	//Pass it to the requireAuth utility function which will in turn get the url and have a way to work with it
	await requireAuth(request);
	return null;
}

export default function Protected() {
	return (
		<>
			<h1>Super Secret Info Here</h1>
			<Outlet />
		</>
	);
}
