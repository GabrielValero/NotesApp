import React, {useState} from 'react'

const Note = React.createContext('')

export function NoteProvider({children}){
	const [notes, setNotes] = useState(null)

	const [noteEditable, setNoteEditable] = useState(null)

	return(
		<Note.Provider value={{notes, setNotes, noteEditable, setNoteEditable}}>
			{children}
		</Note.Provider>
	)
}

export default Note