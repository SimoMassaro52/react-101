import "../styles/Header.css";
import logo from "../../public/Logo.png";

export const Header = () => {
	return (
		<header>
			<div className="logo-box">
				<img src={logo}></img>
			</div>
			<div className="header-text-box">
				<span>React Course - Project 3</span>
			</div>
		</header>
	);
};
