import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	redirect,
} from "react-router-dom";

import Layout from "./Layout";
import Protected, { loader as protectedLoader } from "./Protected";
import Login, { action as loginAction } from "./Login";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<h1>Home page</h1>} />
			<Route path="protected" element={<Protected />} loader={protectedLoader}>
				{/* We made the protected route contain a nested route because we want to preserve the user navigation if he ever gets sent to the login route*/}
				<Route
					path="nested"
					element={<h1>Nested protected route</h1>}
					loader={async ({ request }) => {
						await requireAuth(request);
						return null;
					}}
				/>
			</Route>
			<Route path="login" element={<Login />} action={loginAction} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
