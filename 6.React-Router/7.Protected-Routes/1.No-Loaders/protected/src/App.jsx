import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Auth from "./Auth.jsx";

//This module will be place of discussion about the best practice of protecting data that is fetched in our routes
//There needs to be protection about user-specific data for example so we will need to set up a Layout Route that will authenticate our user

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<h1>Home page</h1>} />
			{/* The route we want to protect will be wrapped in a parent layout route */}
			<Route element={<Auth />}>
				<Route path="protected" element={<h1>Super secret info here</h1>} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
