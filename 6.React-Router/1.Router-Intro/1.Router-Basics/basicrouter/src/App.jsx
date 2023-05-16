import "./App.css";
import Home from "./Home";
import About from "./About";

//We can finally start learning about creating routes in React
//Let's start by defining the difference between Multi Page Applications(MPAs) VS Single Page Applications(SPAs)
//MPAs will render the new content of the page upon clicking on an anchor, meaning it may take some time to load the whole page
//SPAs such as React based web apps will instead render components upon clicking on anchors and the flicker we see in MPAs while they load the desired page will not be present

//To make our app able to work on routes, we need to import the BrowserRouter context...
import {
	BrowserRouter,
	// ...the component Routes and Route to make the actual routes...
	Routes,
	Route,
	//...the Link component in order to link one route to the other
	Link,
} from "react-router-dom";

//We will then wrap the Routes component in the BrowserRouter tag
function App() {
	return (
		<>
			<BrowserRouter>
				{/* This is where we will write our routes */}
				<Routes>
					<Route
						//The root route will point to the home page so it will have a simple slash path
						path="/"
						//The element attribute is what will be rendered when the url points to the desired route, in this case we will render the app component
						element={<Home />}
					/>
					{/* And of course we can make more routes */}
					<Route path="/about" element={<About />} />
				</Routes>
				<br />
				{/* The Link components will take us wherever we want without page refresh by simply pointing to the URL path. They usually go in some navigation element or header but we are not going to style them for now*/}
				<Link to="/">Home</Link>
				<br />
				<Link to="/about">About</Link>
			</BrowserRouter>
		</>
	);
}

export default App;
