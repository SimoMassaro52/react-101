import { useEffect, useState } from "react";
import "./App.css";
//React Split is a library for the resizing of the split pane on the page
import Split from "react-split";
//Nano ID is a dependency for string ID generation
import { nanoid } from "nanoid";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";

function App() {
	//The first feature added is saving the notes to local storage
	//Anything added to the browser's local storage needs to be stringified since it will be stored as an object
	//This state is an array who will be populated by notes or the same array once populated accessed from local storage and parsed in order to be read by JS
	//Also, we will wrap this in a function, this is what's called Lazy State Initialization. We wrap the value of the state in a function that will run only once in order to avoid tapping into local storage every time the state is modified
	const [notes, setNotes] = useState(() => {
		return JSON.parse(localStorage.getItem("notes")) || [];
	});

	//Since the browser's local storage is a Side Effect (outside the scope of React) we need useEffect to use it for changes
	useEffect(() => {
		//This line means local storage is updating the object according to the changes made on the state
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	//This state will keep track of the id of the selected note and set it according to which note we are clicking
	const [currentNoteId, setCurrentNoteId] = useState(
		//This condition checks if the first note exists and only then starts keeping track of the id otherwise it will remain empty string
		(notes[0] && notes[0].id) || ""
	);

	// console.log(currentNoteId);

	function createNewNote() {
		//This function will generate a unique id for the new note and a placeholder body
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here",
		};
		//The new note is placed at the beginning of the notes list
		setNotes((prevNotes) => [newNote, ...prevNotes]);
		//And it automatically selects the new note since the current id is being set to the new note's id
		setCurrentNoteId(newNote.id);
	}

	//This function takes in the text being typed in the current note and puts in at the top of the array
	function updateNote(text) {
		setNotes((oldNotes) => {
			//The find method will look through the ids of the notes array until it finds the one being currently selected
			const foundNote = oldNotes.find(
				(oldNote) => oldNote.id === currentNoteId
			);
			//We are going to update the note with the new text by using the spread operator
			const updatedNote = { ...foundNote, body: text };
			//We will filter the array of notes based on the id being different from the selected one
			const filteredNotes = oldNotes.filter(
				(oldNote) => oldNote.id !== currentNoteId
			);
			//We return the array with the updated note on top and the spread other notes after it
			return [updatedNote, ...filteredNotes];
		});
	}

	function deleteNote(event, noteId) {
		event.stopPropagation();
		setNotes((oldNotes) => {
			const filteredNotes = oldNotes.filter((oldNote) => oldNote.id !== noteId);
			return filteredNotes;
		});
	}

	function findCurrentNote() {
		return (
			notes.find((note) => {
				return note.id === currentNoteId;
			}) || notes[0]
		);
	}

	return (
		<main>
			{notes.length > 0 ? (
				<Split sizes={[30, 70]} direction="horizontal" className="split">
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						delNote={deleteNote}
					/>
					{currentNoteId && notes.length > 0 && (
						<Editor currentNote={findCurrentNote()} updateNote={updateNote} />
					)}
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button className="first-note" onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
	);
}

export default App;
