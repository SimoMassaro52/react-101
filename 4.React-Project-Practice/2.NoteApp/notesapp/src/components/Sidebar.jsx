import React from "react";

export default function Sidebar(props) {
	//Our sidebar will map over the received notes
	const noteElements = props.notes.map((note, index) => (
		<div key={note.id}>
			<div
				//Class ternary to highlight the selected note
				className={`title ${
					note.id === props.currentNote.id ? "selected-note" : ""
				}`}
				onClick={() => props.setCurrentNoteId(note.id)}
			>
				<h4 className="text-snippet">
					{JSON.stringify(note.body.slice(0, note.body.indexOf(`\n`)))}
				</h4>
				<button
					className="delete-btn"
					onClick={(event) => props.delNote(event, note.id)}
				>
					<i className="gg-trash trash-icon"></i>
				</button>
			</div>
		</div>
	));

	return (
		<section className="pane sidebar">
			<div className="sidebar--header">
				<h3>Notes</h3>
				<button className="new-note" onClick={props.newNote}>
					+
				</button>
			</div>
			{noteElements}
		</section>
	);
}
