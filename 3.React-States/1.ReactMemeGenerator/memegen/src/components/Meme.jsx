import "../styles/Meme.css";

export const Meme = () => {
	return (
		<section>
			<form>
				<div className="form-row-1">
					<input className="meme-input-1" type="text" value="Shut up" />
					<input
						className="meme-input-2"
						type="text"
						value="and take my money"
					/>
				</div>

				<div className="form-row-2">
					<input
						className="meme-submit"
						type="submit"
						value="Get a new meme image 🖼"
					/>
				</div>
			</form>
		</section>
	);
};
