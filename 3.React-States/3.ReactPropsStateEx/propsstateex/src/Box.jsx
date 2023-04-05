import "./App.css";

//Our Box component will be stripped from any kind of state
//Its only duty will be receiving the props and having them interact in its context

//An interesting thing to do with JSX is setting a style variable which will contain dynamic rules such as this ternary for the background color
function Box(props) {
	const styles = {
		//This is just an object had its background color value dependent on the boolean value of the prop passed by the parent
		backgroundColor: props.on ? "#222222" : "transparent",
	};

	return (
		<div
			className="box"
			//The attribute style will receive the styles object created above
			style={styles}
			//Instead of setting a state in each of the components and re-render them on click. We place only the event listener here in Box while the logic and state cycles are managed by the parent component
			//The onClick event will receive an arrow function who will execute the toggle function whose parameter is the id of the square as a prop because we will use it as a marker to pick the specific square that was clicked.
			onClick={props.toggle}
		></div>
	);
}

export default Box;
