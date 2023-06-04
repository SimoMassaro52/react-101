//This module will be about the new Action features in React Router
//In non-react web apps, we would most likely gather the data from our form and send it to a .php file but thanks to Action we can submit the data into a component that processes it on the front-end

import {
	//First we will import a Form component that will replace our regular HTML form
	Form,
} from "react-router-dom";

//Form will run a function we tell it to and we are going to export it similarly to a loader
//There is an object intercepted by the action that has a Request and a params property. It's actually the same as the one passed through loaders!
//Remember that the params property is whatever gets passed in the url so we can just grab the request by destructuring and use the get property to get the form data
export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	//Now we have the values of our inputs
	console.log(email, password);
	return null;
}

export default function Login() {
	//The React Form has its own ways to submit the data and track the state of it so we no longer need to track it via regular useState and this event handler function
	// function handleChange(e) {
	// 	const { name, value } = e.target;
	// 	setFormData((prevFormData) => {
	// 		return {
	// 			...prevFormData,
	// 			[name]: value,
	// 		};
	// 	});
	// }

	return (
		//We are going to be handling the data via the POST method (had we not specified this needed to be a POST, Form defaults it to a GET)
		<Form method="post">
			<input type="email" name="email" placeholder="Email address" />
			<br />
			<input type="password" name="password" placeholder="Password" />
			<br />
			<button>Log in</button>
		</Form>
	);
}
