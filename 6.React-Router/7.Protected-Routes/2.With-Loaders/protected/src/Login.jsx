import { useLoaderData } from "react-router-dom";

//We can of course use the useSearchParams hook and the .get property of the URLSearchParams object to get the message
// const [searchParams, setSearchParams] = useSearchParams();
// console.log(searchParams.get("message"));

//But let's learn about doing the same thing with a loader function

//We can access a web native object called Request that possess a url property containing the whole string in the search bar
export function loader({ request }) {
	// Then it's a matter of instantiating a new variable containing the message through the searchParams property
	const url = new URL(request.url).searchParams.get("message");
	// console.log(url);
	return url;
}

export default function Login() {
	//Then we grab the returned value with the useLoaderData hook...
	const message = useLoaderData();
	return (
		<div>
			<h1>Login page goes here</h1>
			{/* And we display the message depending on the value of the message variable (in case the login page gets accessed normally and not through a redirect, we don't want to leave an empty tag) */}
			{message !== null ? <h2>{message}</h2> : ""}
		</div>
	);
}
