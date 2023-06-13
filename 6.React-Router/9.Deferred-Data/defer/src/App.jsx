import "./App.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import Layout from "./Layout";
import Weather, { loader as weatherLoader } from "./Weather";

//This unit will touch on easing the user experience
//Since we started using loaders, we were aware of the benefit of rendering data before components load, making our code more defensive
//But this time, we are simulating a pretty long fetching time on purpose to show just how uneasy waiting for data can be for the user
//We are going to bring some life to our UX by using deffered data so we can actually render the component right away with some loading state until the data is ready

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<h1>Home page</h1>} />
			<Route path="weather" element={<Weather />} loader={weatherLoader} />
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
