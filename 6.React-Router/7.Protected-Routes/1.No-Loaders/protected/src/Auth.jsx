import { Outlet, Navigate } from "react-router-dom";

export default function Auth() {
	//Fake authentication pseudo-code
	//If the user is not logged in
	//Redirect the user to the /login route
	//else return the page normally:

	const isLoggedIn = true;
	// const isLoggedIn = false;
	if (!isLoggedIn) {
		//The Navigate component acts much like the Link component by changing the route in the URL but its does it forcefully upon being rendered
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}
