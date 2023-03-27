import "./App.css";

//We are not going to build static pages anymore.
//As we said many times before, React is declarative. Building this project using plain JS is possible but inconvenient in terms of time and effort.
//This project will have an array that displays its content on the page via mapping, but if we were to alter the content with an onclick function, our UI would stay the same.
//To make it work we are going to access something called React State. State refers to values that a component can maintain between render cycles. They are saved/remembered by the component.
//States are values managed BY the component. Any time will want to alter a value inside a component to display/save, we will use State.
//One important note is that they are the exact opposite of props. Props are immutable, we must not change props that are received by our component much like we don't change values passed in functions. They are what determines the state to change

function App() {
	//We are going to add something to this array of things
	const thingsArray = ["thing 1", "thing 2"];

	//Which will have its elements mapped so that each one will have they own paragraph
	const mappedArray = thingsArray.map((el) => {
		// The key is just to get rid of the unique key warning
		return <p key={el}>{el}</p>;
	});

	//We are going to create a function that pushes new items inside the array and logs the resulting array on click.
	function addItem() {
		let newThing = "thing " + (thingsArray.length + 1);
		thingsArray.push(newThing);
		console.log(thingsArray);
	}

	return (
		<div className="App">
			<button onClick={addItem}>Add Item</button>
			{mappedArray}
		</div>
	);
}

export default App;
