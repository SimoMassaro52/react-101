import { useState, useEffect } from "react";
import "./App.css";

function WindowTracker() {
	//Of course we are going to define a state to actually link the component to the browser window's width
	const [windowWidth, setWindoWidth] = useState(window.innerWidth);

	//Since we are accessing a value outside React's environment we will use useEffect to update the state
	useEffect(() => {
		//We are going to set a function for setting a new state
		function watchWidth() {
			//It will take in the new value of the page's width
			setWindoWidth(window.innerWidth);
			console.log("Set up");
		}

		//And we will link the set state function to the window resize event listener
		window.addEventListener("resize", watchWidth);

		//This would work without any complains from React except for the fact that if we were to click the toggle button and unmount the child component, we would run into a memory leak
		//The memory leak consists of the presence of the event listener even tho the component is not there so the system will still be watching for changes needlessly
		//And that's where the Clean Up function comes into play. We are going to remove the event listener when the component is unmounted to prevent the memory leak
		return () => {
			console.log("Clean up");
			window.removeEventListener("resize", watchWidth);
		};
	}, []);
	return (
		<div>
			<h1>Window width: {windowWidth}</h1>
		</div>
	);
}

export default WindowTracker;
