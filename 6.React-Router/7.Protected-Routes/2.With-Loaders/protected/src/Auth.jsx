import { Outlet, Navigate } from "react-router-dom";

export default function Auth() {
	const isLoggedIn = true;
	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
}
