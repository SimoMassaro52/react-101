import "./App.css";

//To show how to access and modify a key value within the object, we are going to make the favorite icon dynamic on click
//This ternary will depend on the isFavorite key boolean value

function Star(props) {
	let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
	return (
		<img
			// We are going to use a template literal to make this string dynamic
			src={`../public/${starIcon}`}
			className="card--favorite"
			//And here is the event handler function passed as a prop
			onClick={props.handleClick}
		/>
	);
}

export default Star;
