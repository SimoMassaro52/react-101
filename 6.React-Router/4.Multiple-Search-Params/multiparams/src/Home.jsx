import "./App.css";
import { useSearchParams, Link } from "react-router-dom";

const swCharacters = [
	{ name: "Luke Skywalker", type: "Jedi" },
	{ name: "Darth Vader", type: "Sith" },
	{ name: "Emperor Palpatine", type: "Sith" },
	{ name: "Yoda", type: "Jedi" },
];

function Home() {
	const [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get("type");

	const filteredCharacters = typeFilter
		? swCharacters.filter(
				(character) => character.type.toLowerCase() === typeFilter
		  )
		: swCharacters;

	const characterElements = filteredCharacters.map((character) => (
		<div key={character.name}>
			<h3>
				Name:{" "}
				<span className={character.type == "Jedi" ? "blue" : "red"}>
					{character.name}
				</span>
			</h3>
			<p>
				<strong>Type:</strong> {character.type}
			</p>
			<hr />
		</div>
	));

	//As precised in the previous unit, the hard-coded method won't work when setting up a page with multiple params in the query
	//A workaround to merge query params is using a function that will return a string inside the to attribute of the Link components

	//The key will of course be the type property and the value the chosen value, both strings
	function generateParamsString(key, value) {
		//We are going to initiate a new object which is an instant of the URLSearchParams JS constructor with the OLD search params. We are basically creating a new object and adding the keys we need
		const sp = new URLSearchParams(searchParams);
		//The case of no value is covered by using the .delete() method which removes a given property from an object
		if (value === null) {
			sp.delete(key);
		} else {
			//In case there's a value, we are going to add it to the object without losing the other params in the query since they are going to be saved each time in the searchParams state
			sp.set(key, value);
		}
		//It is enough to return a string the has a ? at the beginning, the URL will reckognise it and concatenate it on its own
		return `?${sp.toString()}`;
	}

	//To do the same with the buttons setup, we will also create a function but since we are using an event handler we are free to tackle it by using setSearchParams
	function handleFilterChange(key, value) {
		//This is where we can touch on the difference between setting state with useState and setting a search params object. It's been repeated time and time again how we should never apply direct changes to the state value itself but instead a copy that takes the old values and changes them independently from the previous state. We don't need to care for that here
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	}

	//Note: to see it all work, type any query in the address bar, press enter and then press on one of the links

	return (
		<>
			{" "}
			<h1>Star Wars Characters</h1>
			<div>
				<Link to={generateParamsString("type", "jedi")}>Jedi</Link>
				<Link to={generateParamsString("type", "sith")}>Sith</Link>
				<Link to={generateParamsString("type", null)}>All</Link>
			</div>
			<div>
				<button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
				<button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
				<button onClick={() => handleFilterChange("type", null)}>All</button>
			</div>
			<main>{characterElements}</main>
		</>
	);
}

export default Home;
