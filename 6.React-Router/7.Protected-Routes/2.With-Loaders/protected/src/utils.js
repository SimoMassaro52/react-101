import { redirect } from "react-router-dom";

export async function requireAuth() {
	const isLoggedIn = false;
	if (!isLoggedIn) {
		//We don't have access to the Navigate component here since we are writing it inline but React Router has a property that does exactly the same thing called redirect()
		//It is common and a good practice to use the throw keyword when using a redirect since it is similar to a server response giving an error
		return redirect("/login");
	}
	//Since the loader doesn't return any data if the login was successful we can just return null (won't get returned if isLoggedIn is false)
	return null;
}
