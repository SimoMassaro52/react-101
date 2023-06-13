import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { sleep, getWeather } from "./utils";

//We use async functions in JS because we want the code to be aware of the time it takes for a certain part of our script to run before running something else
//When we use the async keyword, we are creating a promise. We are basically promising the code that whatever is doing the asynchronous operation is going to return a result and fulfill (or reject) the promise
//To bring back the benefit of switching components quickly like we did before loaders, we are going to access a React utility called "defer" that doesn't stop the Weather component from rendering even if the data has not been gathered yet

export async function loader() {
	//const weather = await getWeather();
	//We removed the await keyword so now our weather variable will have the value of a PROMISE {} object (so we renamed it weatherPromise)
	const weatherPromise = getWeather();
	//We will then return the defer utility, which expects an object whose key will be the name of the deferred data and its value the promise we will resolve
	return defer({ weather: weatherPromise });
}

export default function Weather() {
	const loaderData = useLoaderData();
	return (
		<section className="weather-container">
			<h1>Weather in Salt Lake City</h1>
			{/* First thing is defining the content to be displayed until the data is fetched correctly. This is where the Suspense custom component comes into play. It has a fallback attribute whose value is the element we want to display while the rest of the data loads. */}
			<Suspense fallback={<h1>Loading...</h1>}>
				{/* Now that we deffered our data, we can import the Await React component and wrap it around the code we want to render after the referred data is received. It will render the content only after the data is received automatically
				The resolve attribute is what links together loader and content. It expects a promise and ,at the moment, the value of the weather key inside the object we created is exactly that and we can access it with useLoaderData() */}
				<Await resolve={loaderData.weather}>
					{/* We will then use a render prop (briefly, an arrow function that receives whatever data we want to display) and use its value to render the content as tangible data */}
					{(loadedWeather) => {
						const iconUrl = `http://openweathermap.org/img/wn/${loadedWeather.weather[0].icon}@2x.png`;
						return (
							<>
								<h3>{loadedWeather.main.temp}ºF</h3>
								<img src={iconUrl} />
							</>
						);
					}}
				</Await>
			</Suspense>
		</section>
	);
}
