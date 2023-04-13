import "../styles/Meme.css";
//Meme "API" import
// import memesData from "../memesData";
import { useState, useEffect } from "react";

export const Meme = () => {
	//Setting a default state object
	const [meme, setMeme] = useState({
		topText: "Top text",
		bottomText: "Bottom text",
		img: "https://i.imgflip.com/30b1gx.jpg",
	});

	//Setting a state for the whole meme data array of all the memes
	const [allMemes, setAllMemes] = useState([]);

	//API call
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
		//Empty array dependency since we want to make the call only once upon component rendering
	}, []);

	//Random url selection from meme array
	function getRandomMeme() {
		const randomNo = Math.floor(Math.random() * allMemes.length);
		let randomMemeUrl = allMemes[randomNo].url;
		//setMeme function will return the prevMeme object with all its values plus the randomized key value of the img
		setMeme((prevMeme) => ({ ...prevMeme, img: randomMemeUrl }));
	}

	//Inputs change handler
	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
	}

	return (
		<section>
			<form>
				<div className="form-row-1">
					<input
						className="meme-input-1"
						type="text"
						placeholder="Top Text"
						name="topText"
						value={meme.topText}
						onChange={handleChange}
					/>
					<input
						className="meme-input-2"
						type="text"
						placeholder="and take my money"
						name="bottomText"
						value={meme.bottomText}
						onChange={handleChange}
					/>
				</div>

				<div className="form-row-2">
					<button type="button" className="meme-submit" onClick={getRandomMeme}>
						<span>Get a new meme image 🖼</span>
					</button>
				</div>
			</form>
			<div className="meme-img-box">
				<img src={meme.img} />
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>
			</div>
		</section>
	);
};
