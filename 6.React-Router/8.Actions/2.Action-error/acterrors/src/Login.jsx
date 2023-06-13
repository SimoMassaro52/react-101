import {
	Form,
	useActionData,
	redirect,
	//useNavigation (not to be confused with useNavigate that actually redirects the user) is a useful hook that allows us to grab information about a page's navigation processes. Its .state property has 3 dispositions: idle, submitting and loading
	useNavigation,
} from "react-router-dom";

//In this module, we are going to add a try catch block to the action function so we can display some kind of error and stay in the login flow because we don't want to take the user away from the login page

//This function has the sole purpose of delaying the validation
function pause(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

//Fake validation check, expects an object
async function fakeLoginUser(creds) {
	await pause(1000);
	if (creds.email === "s@m.com" && creds.password === "123") {
		localStorage.setItem("loggedin", true);
		return {
			email: creds.email,
			token: "123456789qwerty",
		};
	}
	throw new Error("Couldn't log the user in");
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	//The try will wait for the user validation function and then return the redirect
	try {
		await fakeLoginUser({ email, password });
		return redirect("/protected");
		//When catching the error, we are going to return its message string to then display it and block the user from accessing the data
	} catch (err) {
		return err.message;
	}
}

export default function Login() {
	//To retrieve the eventual error, we are going to use the useActionData() hook
	const errorMsg = useActionData();

	const navigation = useNavigation();
	console.log(navigation.state); //This will of course return the object's state property that will change according to how we are interacting with the page. This way we can display different information while the form is submitting
	return (
		<Form method="post">
			<h1>Login</h1>
			{/* If the error message is defined, we are going to display it */}
			{errorMsg && <h3>{errorMsg}</h3>}
			<input type="email" name="email" placeholder="Email address" />
			<br />
			<input type="password" name="password" placeholder="Password" />
			<br />
			{navigation.state !== "idle" ? (
				<button disabled>Logging in...</button>
			) : (
				<button>Log in</button>
			)}
		</Form>
	);
}
