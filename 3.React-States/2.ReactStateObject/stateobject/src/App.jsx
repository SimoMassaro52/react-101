import { useState } from "react";
import "./App.css";

//This will be a short module on how objects work in useState

function App() {
	//They are set pretty normally within the state function
	const [contact, setContact] = useState({
		firstName: "John",
		lastName: "Doe",
		phone: "+1 (719) 555-1212",
		email: "itsmyrealname@example.com",
		isFavorite: false,
	});

	//To show how to access and modify a key value within the object, we are going to make the favorite icon dynamic on click
	//This ternary will depend on the isFavorite key boolean value
	let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

	function toggleFavorite() {
		//In order to toggle the png, we need to use the set state function and switch the key value every time the icon is clicked
		setContact((prevContact) => ({
			//If we were to omit this spread operator, the function would just strip the object of any of the other keys and only the switched boolean would remain as a key.
			//Thanks to the spread operator we can bring the original object properties without re-writing them
			...prevContact,
			isFavorite: !prevContact.isFavorite,
		}));
	}

	return (
		<main className="App">
			<div className="card">
				<img src="./public/user.jpg" className="card--image" />
				<div className="card--info">
					<img
						// We are goin to use a template literal to make this string dynamic
						src={`../public/${starIcon}`}
						className="card--favorite"
						onClick={toggleFavorite}
					/>
					{/* Including the keys is pretty straight-forward by taking advantage of dot notation for objects in JS */}
					<h2 className="card--name">
						{contact.firstName} {contact.lastName}
					</h2>
					<p className="card--contact">{contact.phone}</p>
					<p className="card--contact">{contact.email}</p>
				</div>
			</div>
		</main>
	);
}

export default App;
