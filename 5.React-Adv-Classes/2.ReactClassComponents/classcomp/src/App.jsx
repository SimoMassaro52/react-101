//In this module we are going to see how to initialize a React component using classes

// First we need to import the Component class component from React in order to access it
import { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import Question from "./Components/Question";

// function App() {
// 	return <></>;
// }

//Instead of writing a function we are going to extend the Component class
class App extends Component {
	// Then we will need a render() method returning our jsx content
	render() {
		return (
			<>
				{/* Props will be passed down as usual but there's a catch */}
				<Title text={"Class Component"} />
				<Question />
			</>
		);
	}
}

export default App;
