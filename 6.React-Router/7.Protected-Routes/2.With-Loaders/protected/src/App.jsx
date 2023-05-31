import "./App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	redirect,
} from "react-router-dom";

import Layout from "./Layout";
import Login, { loader as loginLoader } from "./Login";

//Here we will se that there's a difference between loader and no-loader app
//The fetch request is executed first, before the component mounts so we can manage the error in a more declarative way
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<h1>Home page</h1>} />
			{/* We don't need to wrap our protected route in a auth layout route anymore since we can manage to block the access before rendering it thanks to loaders */}
			<Route
				path="protected"
				element={<h1>Super secret info here</h1>}
				//We are going to instantiate a loader inline since we don't have a component for the protected route
				loader={async () => {
					const isLoggedIn = false;
					if (!isLoggedIn) {
						//We don't have access to the Navigate component here since we are writing it inline but React Router has a property that does exactly the same thing called redirect()
						//It is common and a good practice to use the throw keyword when using a redirect since it is similar to a server response giving an error
						//Also, it would be nice to display some kind of message when the user gets redirected to explain the situation. Check the Login component to see how it gets consumed and emplemented
						throw redirect("/login?message=you must log in");
					}
					//Since the loader doesn't return any data if the login was successful we can just return null (won't get returned if isLoggedIn is false)
					return null;
				}}
			/>
			<Route path="login" element={<Login />} loader={loginLoader} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
