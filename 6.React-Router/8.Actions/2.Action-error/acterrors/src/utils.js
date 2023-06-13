import { redirect } from "react-router-dom";

//requireAuth now expects the request object so we can work with the url in its context without having to write boilerplate code everywhere else this function is used

export async function requireAuth(request) {
	//We gain access to the URL browser native object and grab the pathname
	const pathname = new URL(request.url).pathname;
	const isLoggedIn = localStorage.getItem("loggedin");
	if (!isLoggedIn) {
		throw redirect(`/login?redirectTo=${pathname}`);
	}
}
