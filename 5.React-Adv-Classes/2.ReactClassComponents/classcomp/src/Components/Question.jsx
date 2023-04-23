import { Component } from "react";
import "../App.css";

//Let's see how to use hooks such as useState inside a class component
//Unlike in function components where we are free to initialize state as any data type (boolean, array, string etc), class components' state has to be an object and it needs to be called state

class Question extends Component {
	// const [goOut, setGoOut] = useState("Yes");

	//We have to imagine this as a state class and its properties as state instances
	//This is called "class field"
	state = {
		asnwer: "Yes",
	};

	//There are also some details we need to change if we want to create a function that alters the state in class based components
	//It needs to be an arrow function to work correctly
	toggleAsnwer = () => {
		//The state setter has to be called setState
		this.setState((prevState) => {
			//Since the state is an object, we also need to return an object in our setter function
			return {
				asnwer: prevState.asnwer === "Yes" ? "No" : "Yes",
			};
		});
	};
	render() {
		return (
			<>
				<div className="box">
					<h2 className="quest">Are Class Components confusing?</h2>
					<div
						className="answer"
						//We need to refer to the function with the this keyword
						onClick={this.toggleAsnwer}
					>
						<h2>{this.state.asnwer}</h2>
					</div>
				</div>
			</>
		);
	}
}

export default Question;
