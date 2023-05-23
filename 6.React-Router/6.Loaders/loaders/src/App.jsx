//This module is going to be about loaders, a new feature introduced in React 6.4 that makes error handling much easier and that we will implement in the VanLife project but need to clear out here
//The case of study here, is in case we have a real API, we need to consider the option of it failing to fetch. We need to handle these kinds of errors in some way
//Of course we can do it with classic JS for each error type by refactoring with async await functions and some kind of loading state that updates a boolean parameter to load the data.
//This all happens after the component mounts but what if we could load the data BEFORE the page loads the component?
//And here come in Data Layer APIs! We won't even need useEffect to make the data fetching happen.\
//The creators of React Router gave us the loader attribute. It will export a function that will fetch the data and we can get the data returned with the hook useLoaderData

//For the sake of education, we are going to fashion part of the star wars characters example in a different way. Starting from how we initialize our browser router

import "./App.css";
import {
	//We will import a new function called createBrowserRouter
	createBrowserRouter,
	//And a component called RouterProvider instead of BrowserRouter
	RouterProvider,
	//We won't need the Route structure components anymore
	// Routes,
	// Route,
} from "react-router-dom";
import Home from "./Home.jsx";

// Then we need to assign the function to a variable and we will be able to create an array of objects that will make up for our new browser router
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

//We need to mention that the Routes component is actually taking its elements and turning them into a regular JS object under the hood
//So knowing that, we can write the BrowserRouter contents as an array of objects much like this:
// [
// 	{
// 		path: "/"
// 		element: <Home/>,
// 	}
// ]

// <Routes>
// 		<Route path="/" element={<Home />} />
// </Routes>

function App() {
	//And we are going to get rid of BrowserRouter and get RouterProvider instead
	return <RouterProvider router={router} />;
}

export default App;
