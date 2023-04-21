import "../App.css";

function Die(props) {
	let held = props.toggle ? "die-held" : "";

	const dots = [];

	if (props.value < 4) {
		for (let i = 0; i < props.value; i++) {
			dots.push(<span key={i} className="die-dot"></span>);
		}
	} else if (props.value === 4) {
		dots.push(
			<div key={props.value}>
				<div className="col">
					<span className="die-dot"></span>
					<span className="die-dot"></span>
				</div>
				<div className="col">
					<span className="die-dot"></span>
					<span className="die-dot"></span>
				</div>
			</div>
		);
	} else if (props.value === 5) {
		dots.push(
			<div key={props.value}>
				<div className="col">
					<span className="die-dot"></span>
					<span className="die-dot"></span>
				</div>
				<div className="col">
					<span className="die-dot"></span>
				</div>
				<div className="col">
					<span className="die-dot"></span>
					<span className="die-dot"></span>
				</div>
			</div>
		);
	} else if (props.value === 6) {
		dots.push(
			<div key={props.value}>
				<div className="col">
					<span className="die-dot"></span>
					<span className="die-dot"></span>
					<span className="die-dot"></span>
				</div>
				<div className="col">
					<span className="die-dot"></span>
					<span className="die-dot"></span>
					<span className="die-dot"></span>
				</div>
			</div>
		);
	}

	return (
		<div
			className={`die ${held} face-${props.value} `}
			onClick={props.holdDice}
		>
			{dots}
		</div>
	);
}

export default Die;
