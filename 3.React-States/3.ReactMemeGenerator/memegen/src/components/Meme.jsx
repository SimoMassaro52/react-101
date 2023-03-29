import "../styles/Meme.css";
import memesData from "../memesData";
import React from "react";

export const Meme = () => {
	//Setting a default state being a default url
	const [memeImg, setMeme] = React.useState("https://i.imgflip.com/30b1gx.jpg");

	//Random url selection from meme array
	const memeArray = memesData.data.memes;
	function getRandomMeme() {
		const randomNo = Math.floor(Math.random() * memeArray.length);
		let memeUrl = memeArray[randomNo].url;
		//setMeme function makes the prevmeme value become the radnom meme url
		setMeme((prevMeme) => memeUrl);
	}

	return (
		<section>
			<form>
				<div className="form-row-1">
					<input className="meme-input-1" type="text" placeholder="Shut up" />
					<input
						className="meme-input-2"
						type="text"
						placeholder="and take my money"
					/>
				</div>

				<div className="form-row-2">
					<button type="button" className="meme-submit" onClick={getRandomMeme}>
						<span>Get a new meme image 🖼</span>
					</button>
				</div>
			</form>
			<div className="meme-img-box">
				<img src={memeImg} />
			</div>
		</section>
	);
};
