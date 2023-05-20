import "./App.css";
import {
	//Search params hook import
	useSearchParams,
	Link,
} from "react-router-dom";

//The useSearchParams hook is used to read and modify the query string in the URL of the current route

//Dummy "API call data" array
const swCharacters = [
	{ name: "Luke Skywalker", type: "Jedi" },
	{ name: "Darth Vader", type: "Sith" },
	{ name: "Emperor Palpatine", type: "Sith" },
	{ name: "Yoda", type: "Jedi" },
];

function Home() {
	//useSearchParams is used much like useState in it returns an array of 2 values. The first one being the search params property (the URLSearchParams object) and a setter function
	const [searchParams, setSearchParams] = useSearchParams();

	//console.log(searchParams); Returns the URLsearchParams browser native object
	//This object has some useful methods we just gained access to such as .get() which returns the value of whatever query string is present in the route's URL
	console.log(searchParams.get("type")); //By adding the query "?type=sith" to the URL this console log will return the string "sith"
	//We are going to define a filter variable that will correspond to the type present in the url
	const typeFilter = searchParams.get("type");

	//In order to filter the array only with the sith characters we can use an auxiliary variable that corresponds to the value of the filtered characters array (or to the original one in case the isn't a filter so we cover that case as well)
	const filteredCharacters = typeFilter
		? swCharacters.filter(
				//The character's whose type attribute corresponds to the string "sith" is going to be pushed in the resulting array
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
	return (
		<>
			{" "}
			<h1>Star Wars Characters</h1>
			{/* More often than not, when working with filter we are going to set up buttons, not link (even tho that is entirely possible and there is an example in the comment below)
				<Link to="?type=jedi">Jedi</Link>
				<Link to="?type=sith">Sith</Link>
				<Link to=".">All</Link>
			The common way is actually using the setter function of the useSearchParams() hook on a click event handler and passing it an object with the property we want to point to as the key
			 */}
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
