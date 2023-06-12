import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	redirect,
} from "react-router-dom";

import Layout from "./Layout";
import Protected from "./Protected";
import Login, { action as loginAction } from "./Login";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<h1>Home page</h1>} />
			<Route
				path="protected"
				element={<Protected />}
				loader={async () => {
					const isLoggedIn = localStorage.getItem("loggedin");
					if (!isLoggedIn) {
						throw redirect("/login");
					}
					return null;
				}}
			/>
			<Route path="login" element={<Login />} action={loginAction} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
