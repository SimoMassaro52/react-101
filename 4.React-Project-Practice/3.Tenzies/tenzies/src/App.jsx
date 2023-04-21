import { useState } from "react";
import Die from "./components/Die";
import "./App.css";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import Confetti from "react-confetti";

function App() {
	// Dice object state
	const [dice, setDice] = useState(allNewDice());

	// Winning state
	const [tenzies, setTenzies] = useState(false);

	// Roll counter state
	const [rolls, setRolls] = useState(0);

	//Chronometer display state
	const [time, setTime] = useState(0);
	//Chronometer running state
	const [isRunning, setIsRunning] = useState(true);

	//Record time storage state
	const [best, setBest] = useState(() => {
		return JSON.parse(localStorage.getItem("best")) || 0;
	});

	//Dice creation from scratch function
	function allNewDice() {
		//Randomizer
		let randomArr = [];
		for (let i = 0; i < 10; i++) {
			randomArr.push({
				value: Math.floor(Math.random() * 6) + 1,
				isHeld: false,
				id: nanoid(),
			});
		}
		return randomArr;
	}

	//Dice roll on click
	function rollDice() {
		//Condition to determine when the game is over
		if (tenzies) {
			//Reset every state
			//Reset winning condition
			setTenzies(false);
			//Regenerate all dice
			setDice(allNewDice);
			//Reset number of roll
			setRolls(0);
			//Reset time
			setTime(0);
			//Restart chronometer
			setIsRunning(true);
		} else {
			//Roll counter increment
			setRolls((prevRolls) => prevRolls + 1);
			//Reroll all dice except the ones that are held
			setDice((prevDice) =>
				prevDice.map((die) => {
					return die.isHeld
						? die
						: {
								value: Math.floor(Math.random() * 6) + 1,
								isHeld: false,
								id: nanoid(),
						  };
				})
			);
		}
	}

	//Function to determine which die is pressed
	function hold(id) {
		setDice((prevDice) =>
			prevDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	//Function used to convert time
	function timeConvert(t) {
		return (
			Math.floor((t % 360000) / 6000) +
			":" +
			Math.floor((t % 6000) / 100)
				.toString()
				.padStart(2, "0") +
			"." +
			Math.floor(t % 100)
		);
	}

	//We are using useEffect to keep the 2 winning states in sync
	useEffect(() => {
		//Winning conditions
		//Check if every dice is held
		let checkHeld = dice.every((die) => die.isHeld === true);
		//Check if all dice are the same number
		let checkEqual = dice.every((die) => die.value === dice[0].value);
		//If both return a boolean...
		if (checkHeld && checkEqual) {
			//Set the winning state to true
			setTenzies(true);
			//Stop the chronometer
			setIsRunning(false);
			if (best === 0 || time < best) {
				setBest(time);
			}
		}
		//The dependency will be the state of the dice
	}, [dice]);

	//We are using useEffect to account for time passed because time counts as a Side Effect to React
	useEffect(() => {
		let intervalId;
		if (isRunning) {
			intervalId = setInterval(() => setTime(time + 1), 10);
		}
		return () => clearInterval(intervalId);
	}, [isRunning, time]);

	//This effect just sets the best time to be saved in local storage
	useEffect(() => {
		localStorage.setItem("best", JSON.stringify(best));
	}, [best]);

	//Time variables
	const minutes = Math.floor((time % 360000) / 6000);
	const seconds = Math.floor((time % 6000) / 100);
	const milliseconds = Math.floor(time % 100);

	//Variables for the confetti
	const width = window.innerWidth;
	const height = window.innerHeight;

	const diceElements = dice.map((die) => {
		return (
			<Die
				holdDice={() => hold(die.id)}
				toggle={die.isHeld}
				key={die.id}
				value={die.value}
			/>
		);
	});

	return (
		<main className="App">
			<div className="box">
				<div className="txt-wrapper">
					<h1 className="title">Tenzies</h1>
					<p className="instructions">
						Roll until all dice are the same. Click each die to freeze it at its
						current value between rolls.
					</p>
				</div>
				<div className="die-wrapper">{diceElements}</div>
				<div className="btn-box">
					<div className="roll-counter">
						<span className="roll-txt">Rolls: {rolls}</span>
					</div>
					<button className="btn-roll" onClick={rollDice}>
						{tenzies ? "New Game" : "Roll"}
					</button>
					<div className="time-counter">
						{minutes}:{seconds.toString().padStart(2, "0")}
					</div>
				</div>
				{tenzies ? (
					<Confetti numberOfPieces={150} width={width} height={height} />
				) : (
					""
				)}
			</div>
			<div className="best-box">
				Best time: {best === 0 ? "none" : timeConvert(best)}
			</div>
		</main>
	);
}

export default App;
