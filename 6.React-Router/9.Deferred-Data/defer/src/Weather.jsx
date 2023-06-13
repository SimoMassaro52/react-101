import React, { Suspense } from "react";
import { useLoaderData, defer } from "react-router-dom";
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
	const iconUrl = `http://openweathermap.org/img/wn/${loaderData.weather[0].icon}@2x.png`;

	return (
		<section className="weather-container">
			<h1>Weather in Salt Lake City</h1>
			<h3>{loaderData.main.temp}ºF</h3>
			<img src={iconUrl} />
		</section>
	);
}
