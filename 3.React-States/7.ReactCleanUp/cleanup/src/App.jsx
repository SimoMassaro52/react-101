import { useState } from "react";
import "./App.css";
import WindowTracker from "./WindowTracker";

//This module will add some clarity on the scope and use case of useEffect as well as expanding on its cleanup
//We are going to see another instance where useEffect allows us to reach beyond the scope of React's environment with the window resizing
//And we will also see what happens when we still listen to the changes of an unmounted component and how to prevent memory leaks

function App() {
	//Our App root component is going to contain a button that toggles a window width tracker

	//Boolean to mount/unmount the child component
	const [show, setShow] = useState(true);

	function toggleTracker() {
		setShow((prevShow) => !prevShow);
	}
	return (
		<div className="container">
			<button onClick={toggleTracker}>Toggle WindowTracker</button>
			{/* If show is true, display the WindowTracker component */}
			{show && <WindowTracker />}
		</div>
	);
}

export default App;
