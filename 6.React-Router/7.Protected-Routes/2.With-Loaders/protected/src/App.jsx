import "./App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	redirect,
} from "react-router-dom";

import Layout from "./Layout";
import Auth from "./Auth";
import Login from "./Login";
import Home from "./Home";

import { requireAuth } from "./utils";

//Here we will se that there's a difference between loader and no-loader app
//The fetch request is executed first, before the component mounts so we can manage the error in a more declarative way

console.log(requireAuth());

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				{/* We don't need to wrap our protected route in a auth layout route anymore since we can manage to block the access before rendering it thanks to loaders */}
				<Route
					path="protected"
					element={<Auth />}
					//We are going to instantiate a loader inline since we don't have a component for the protected route
					loader={async () => await requireAuth()}
				/>
				<Route path="login" element={<Login />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}
