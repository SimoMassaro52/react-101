import "../styles/Meme.css";
import memesData from "../memesData";

export const Meme = () => {
	//Random url selection from meme array
	const memeArray = memesData.data.memes;
	function getRandomMeme() {
		const randomNo = Math.floor(Math.random() * memeArray.length);
		let memeUrl = memeArray[randomNo].url;
		console.log(memeUrl);
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
		</section>
	);
};
