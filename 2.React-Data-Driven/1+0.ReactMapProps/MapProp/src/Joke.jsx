import "./App.css";

// Our component will only have the task of receiving the props and styling them

export default function Joke(props) {
	return (
		<div>
			<h3>Setup: {props.setup}</h3>
			<p>Punchline: {props.punchline}</p>
			<hr />
		</div>
	);
}
