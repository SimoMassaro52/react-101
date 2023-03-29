import { useState } from "react";
import "./App.css";
import Star from "./Star";

//This will be a short module on how objects work in useState

function App() {
	//They are set pretty normally within the state function
	const [contact, setContact] = useState({
		firstName: "John",
		lastName: "Doe",
		phone: "+1 (719) 555-1212",
		email: "itsmyrealname@example.com",
		isFavorite: true,
	});

	//This toggle function has to exist within the parent component but we will discover how to pass it as a prop to the child Star component in order to make it work
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
					{/* The real conundrum here is making the child component able to alter the value that it is receiving
						We can do it by passing the toggleFavorite function as a custom prop like any other and handle the onClick event on the child component file*/}
					<Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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
