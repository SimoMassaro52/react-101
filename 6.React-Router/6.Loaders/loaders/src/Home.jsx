import "./App.css";

//The most important thing we need to import is the hook useLoaderData
import { useLoaderData } from "react-router-dom";

//To make our loader work, we need to export a function (no matter the name) whose job will be getting the data
export function loader() {
	return "data is here";
}

function Home() {
	//Then we assign the hook to a variable and it will be linked to whatever value the loader function returns
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<main>
				<h1>Star Wars Characters</h1>
			</main>
		</>
	);
}

export default Home;
