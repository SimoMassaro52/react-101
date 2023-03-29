import "../styles/Meme.css";
//Meme "API" import
import memesData from "../memesData";
import { useState } from "react";

export const Meme = () => {
	//Setting a default state object
	const [meme, setMeme] = useState({
		topText: "top text",
		bottomText: "bottom text",
		img: "https://i.imgflip.com/30b1gx.jpg",
	});

	//Setting a state for the whole meme data array of all the memes
	const [allMemeImages, setAllMemes] = useState(memesData);

	//Random url selection from meme array
	const memeArray = allMemeImages.data.memes;
	function getRandomMeme() {
		const randomNo = Math.floor(Math.random() * memeArray.length);
		let randomMemeUrl = memeArray[randomNo].url;
		//setMeme function will return the prevMeme object with all its values plus the randomized key value of the img
		setMeme((prevMeme) => ({ ...prevMeme, img: randomMemeUrl }));
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
				<img src={meme.img} />
			</div>
		</section>
	);
};
