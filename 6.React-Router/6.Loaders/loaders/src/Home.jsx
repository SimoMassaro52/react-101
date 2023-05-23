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

	function generateParamsString(key, value) {
		const sp = new URLSearchParams(searchParams);
		if (value === null) {
			sp.delete(key);
		} else {
			sp.set(key, value);
		}
		return `?${sp.toString()}`;
	}

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	}

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
