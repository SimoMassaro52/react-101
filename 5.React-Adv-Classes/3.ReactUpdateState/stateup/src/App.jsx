import { Component } from "react";
import Star from "./Star";
import "./App.css";

// In this module we will see the advantage of updating state in a class component vs a function component
//We are going to recreate the contact card of unit 3.2 StateObject (old code has been commented)

class App extends Component {
	state = {
		firstName: "John",
		lastName: "Doe",
		phone: "+1 (719) 555-1212",
		email: "itsmyrealname@example.com",
		isFavorite: false,
	};

	//Here's the beauty of state in class components
	//We don't need to use the spread operator anymore to save the data of the previous state over the altered state because setState will join the new version to the old one with the altered values in the background

	toggleFavorite = () => {
		this.setState((prevContact) => {
			return {
				isFavorite: !prevContact.isFavorite,
			};
		});
	};

	render() {
		let starIcon = this.state.isFavorite ? "star-filled.png" : "star-empty.png";

		console.log(this.state.isFavorite);

		return (
			<>
				<main className="App">
					<div className="card">
						<img src="./public/user.jpg" className="card--image" />
						<div className="card--info">
							<img
								src={`../public/${starIcon}`}
								className="card--favorite"
								onClick={this.toggleFavorite}
							/>
							<h2 className="card--name">
								{this.state.firstName} {this.state.lastName}
							</h2>
							<p className="card--contact">{this.state.phone}</p>
							<p className="card--contact">{this.state.email}</p>
						</div>
					</div>
				</main>
			</>
		);
	}
}

// function App() {
// 	const [contact, setContact] = useState({
// 		firstName: "John",
// 		lastName: "Doe",
// 		phone: "+1 (719) 555-1212",
// 		email: "itsmyrealname@example.com",
// 		isFavorite: true,
// 	});

// 	function toggleFavorite() {
// 		setContact((prevContact) => ({
// 			...prevContact,
// 			isFavorite: !prevContact.isFavorite,
// 		}));
// 	}
// 	return (
// 		<>
// 			<main className="App">
// 				<div className="card">
// 					<img src="./public/user.jpg" className="card--image" />
// 					<div className="card--info">
// 						<Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
// 						<h2 className="card--name">
// 							{contact.firstName} {contact.lastName}
// 						</h2>
// 						<p className="card--contact">{contact.phone}</p>
// 						<p className="card--contact">{contact.email}</p>
// 					</div>
// 				</div>
// 			</main>
// 		</>
// 	);
// }

export default App;
