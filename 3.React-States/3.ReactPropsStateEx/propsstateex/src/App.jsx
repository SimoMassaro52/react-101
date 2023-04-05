import { useState } from "react";
import "./App.css";
import Box from "./Box.jsx";
import boxes from "./boxes";
//This module is more of an exercise on props and state than a lesson
//We are going to create a set of squares with unique IDs and boolean values as components
//The squares will also have a function that will toggle a style rule inside of them to change their background color

function App() {
	//State initialization
	const [squares, setSquares] = useState(boxes);

	//This is where the id comes to help. We are setting a function which will expect the id parameter...
	function toggle(id) {
		//...to then use the set state function...
		setSquares((prevSquares) => {
			//...to return the map of each of the squares when the button is clicked...
			return prevSquares.map((square) => {
				//...who in turn checks for every square's id until it connects the id of the one who was clicked and switches its on property to the opposite. The other squares will remain untouched and be re-rendered as they were before
				// The ternary is
				return square.id === id ? { ...square, on: !square.on } : square;
			});
		});
	}

	const squareElements = squares.map((square) => (
		<Box
			//key warning remover
			key={square.id}
			//On property state
			on={square.on}
			//Arrow function erunning the toggle function receiving the id as a parameter passed as a prop
			toggle={() => toggle(square.id)}
		/>
	));
	return <div className="App">{squareElements}</div>;
}

export default App;
