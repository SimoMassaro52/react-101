//Asset import in React
import logo from "../assets/react-logo.png";

//Style sheet import
import "../styles/Navbar.css";

export const Navbar = (props) => {
	return (
		<nav className={props.darkMode ? "dark" : ""}>
			<div className="navlogo">
				<img src={logo} className="logo" />
				<span>ReactFacts</span>
			</div>
			<div className="toggler" onClick={props.handleClick}>
				<p className="toggler-light">Light</p>
				<div className="toggler-slider">
					<div className="toggler-slider-circle"></div>
				</div>
				<p className="toggler-dark">Dark</p>
			</div>
		</nav>
	);
};
