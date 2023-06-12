import { Form, useActionData, redirect } from "react-router-dom";

//In this module, we are going to add a try catch block to the action function so we can display some kind of error and stay in the login flow because we don't want to take the user away from the login page

//Fake validation check, expects an object
async function fakeLoginUser(creds) {
	if (creds.email === "s@m.com" && creds.password === "123") {
		localStorage.setItem("loggedin", true);
		console.log("wewe");
		return {
			email: creds.email,
			token: "123456789qwerty",
		};
	}
	console.log("nono");
	throw new Error("Counldn't log the user in");
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	console.log({ email, password });
	return redirect("/protected");
	try {
		await fakeLoginUser({ email, password });
	} catch (err) {
		return err.message;
	}
}

export default function Login() {
	//To retrieve the eventual error, we are going to use the useActionData() hook
	const errorMsg = useActionData();
	return (
		<Form method="post">
			<h1>Login</h1>
			{errorMsg && <h3>Couldn't log in</h3>}
			<input type="email" name="email" placeholder="Email address" />
			<br />
			<input type="password" name="password" placeholder="Password" />
			<br />
			<button>Log in</button>
		</Form>
	);
}
