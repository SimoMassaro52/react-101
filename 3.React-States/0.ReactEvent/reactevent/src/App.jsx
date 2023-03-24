import "./App.css";

//In regular html+js vanilla project to make our page interactive we use events and event listeners
//The two ways we use them are pointing at the event via id and writing the whole function and event in the js file
//Or using attributes to listen to specific things happening to our tag like onclick="" or onmouseover="" etc
//The second method is how it's done in React. JSX as we saw, allows us to write javascript inside mark-up and this module demonstrates that

function App() {
	//We are going to make our component smarter by writing functions before the rendering return
	function handleClick() {
		console.log("I was clicked!");
	}

	function handleHover() {
		console.log("I was mouseovered!");
	}
	return (
		<div className="container">
			<img src="https://picsum.photos/640/360" onMouseOver={handleHover} />
			{/* If we were to write handleClick() with parenthesis, the system would just read it as a call of the enstablished function to be executed right as the element renders so it will work on page rendering only 1 time */}
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}

export default App;
