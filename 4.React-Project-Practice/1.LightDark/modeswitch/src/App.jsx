import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { useState } from "react";
import "./App.css";

function App() {
	const [darkMode, setMode] = useState(false);

	function toggleMode() {
		setMode((prevMode) => !prevMode);
	}
	return (
		<div className="container">
			<Navbar darkMode={darkMode} handleClick={toggleMode} />
			<Main darkMode={darkMode} />
		</div>
	);
}

export default App;
