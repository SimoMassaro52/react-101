import "./App.css";

//To use React states we need to import the useState property from the React object of the react package
import { useState } from "react";

//We are not going to build static pages anymore.
//As we said many times before, React is declarative. Building this project using plain JS is possible but inconvenient in terms of time and effort.
//This project will have an array that displays its content on the page via mapping, but if we were to alter the content with an onclick function, our UI would stay the same.
//To make it work we are going to access something called React State. State refers to values that a component can maintain between render cycles. They are saved/remembered by the component.
//States are values managed BY the component. Any time we'll want to alter a value inside a component to display/save, we will use State.
//One important note is that they are the exact opposite of props. Props are immutable, we must not change props that are received by our component much like we don't change values passed in functions. They are what determines the state to change

function App() {
	//We are going to add something to this array of strings.
	//Reacts's useState is a hook which returns an array containing the value of whatever is written inside the state function (the things array in this case) and a function which is usually used to set and update the state
	// const things = React.useState(["thing1", "thing2"]);

	//By using array destructuring we are able to define the state value and the set state function so we would usually initialize a state variable like this
	const [things, setThings] = useState(["thing 1", "thing 2"]);
	//things at line 18 is the default value of whatever we are setting the state for. An array containing 2 default strings

	//We are going to create a function that pushes new items inside the array and logs the resulting array on click.
	function addThing() {
		const newThing = "thing " + (things.length + 1);
		//To update the things array, we are going to use the setThings function with a callback arrow function
		//The norm in this case is defining a prevState parameter which is the unapdated state of whatever we are changing (that being things array)
		//It is very tempting to use array.push() but we can't. As we said, states are immutable and using a function on the original array would not work
		//We can use the spread operator to spread the things array and add the new element as in an array
		setThings((prevState) => [...prevState, newThing]);
	}

	//Which will have its elements mapped so that each one will have they own paragraph
	const mappedArray = things.map((el) => {
		//The key is just to get rid of the unique key warning in the console
		return <p key={el}>{el}</p>;
	});

	return (
		<div className="App">
			<button onClick={addThing}>Add Item</button>
			{mappedArray}
		</div>
	);
}

export default App;
