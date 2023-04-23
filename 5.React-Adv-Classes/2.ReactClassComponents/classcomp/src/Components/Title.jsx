import { Component } from "react";
import "../App.css";

class Title extends Component {
	render() {
		return (
			<>
				{/* Props no longer need to be received, they will be part of the subclass component we created and they can be summoned by using the this keyword */}
				<h1>{this.props.text}</h1>
			</>
		);
	}
}

export default Title;
