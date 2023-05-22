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

	console.log(searchParams.get("type"));
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
		//The case of no value is covered by using the .delete() method which removes a given property form an object
		if (value === null) {
			sp.delete(key);
		} else {
			//In case there's a value, we are going to add it to the object without losing the other params in the query since they are going to be saved each time in the searchParams state
			sp.set(key, value);
		}
		//It is enough to return a string the has a ? at the beginning, the URL will reckognise it and concatenate it on its own

		return `?${sp.toString()}`;
	}

	return (
		<>
			{" "}
			<h1>Star Wars Characters</h1>
			<div>
				<button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
				<button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
				<button onClick={() => setSearchParams({})}>All</button>
			</div>
			<main>{characterElements}</main>
		</>
	);
}

export default Home;
