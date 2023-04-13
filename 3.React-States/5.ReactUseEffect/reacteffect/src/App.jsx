import { useState, useEffect } from "react";
import "./App.css";

//In this module we are going to learn about another useful React hook called useEffect
//The useEffect hook manages React's side effects which are pieces of code React won't be in charge of. Some examples are local storage, APIs, websockets, keeping two states in sync
//We can imagine the useEffect as something that depends on the life cycle of the component and runs side affects according to either its creation, its development(whenever a state changes) or its decay
//In this example, we are going to make a call to the Star Wars API and display the data for the first character, then we are going to update a counter and display the according character

function App() {
	//We initialize the data as an empty object
	const [characterData, setCharacterData] = useState({});
	//We set a count
	const [count, setCount] = useState(1);

	//The useEffect always contains a callback function which will contain whatever we want to run
	useEffect(
		() => {
			//This fetch request calls the api for the character where the index depends on the count state
			fetch(`https://swapi.dev/api/people/${count}`)
				.then((res) => res.json())
				//We are going to fill our empty object with the api data
				.then((data) => setCharacterData(data));
			console.log("effect");
		},
		//This is the "optional" second parameter of useEffect and it is what the function's execution is going to be depending on
		//Had we omitted it, the function would re-render countinously
		//If we were to put an empty array [], the function would only run once when the component is rendered
		//In this case, we are going to re-render the component every time the state changes and this function will compare the previous count to the new re-rendered one and run when it intercepts a change
		[count]
	);

	//Changle handler
	function handleChange() {
		setCount((prevCount) => prevCount + 1);
	}

	return (
		<div className="App">
			<h2>The count is {count}</h2>
			{/* On click the count will increment */}
			<button onClick={handleChange}>Get Next Character</button>
			{/* API response display */}
			<pre>{JSON.stringify(characterData, null, 2)}</pre>
		</div>
	);
}

export default App;
