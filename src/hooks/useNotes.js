import React, {useContext, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import NoteContext from '../context/NoteContext'

export default function useNotes(){
	
	const {notes, setNotes} = useContext(NoteContext)

	const getNotes = async ()=>{
    try {
      const response = await AsyncStorage.getItem('@Notes')

      if(response !== null && response.length > 0 && response != []){
				return JSON.parse(response)
      }else return null

    } catch (error) {
      console.log(error);
    }
  }

	const createNote = async ({note})=>{
		let notesList = []

    try {
      const getNotesList = await getNotes()
			console.log(getNotesList)
			note.id = getNotesList == null ? 1 
			: getNotesList[getNotesList.length-1].id + 1

			notesList = getNotesList == null ? [note] : getNotesList.concat(note)

      setNotes(notesList)
      
      await AsyncStorage.setItem('@Notes', JSON.stringify(notesList))

    } catch (error) {
      console.log(error)
    }
	}

	const updateNote = async ({noteUpdate})=>{
		let notesList = []
		try {
			const getNotesList = await getNotes()

			notesList = getNotesList.map((noteItem)=>{
				if(noteItem.id === noteUpdate.id) noteItem = noteUpdate
				return noteItem
			})
			setNotes(notesList)
	    await AsyncStorage.setItem('@Notes', JSON.stringify(notesList))
	  } catch (error) {
	  	console.log(error)
	  }
	}
	const deleteNote = async ({id})=>{
		let notesList = []
		try {
			const getNotesList = await getNotes()

			notesList = getNotesList.filter((noteItem)=>{
				if(noteItem.id !== id) return noteItem
			})

			if(notesList.length > 0){
				setNotes(notesList)
		    await AsyncStorage.setItem('@Notes', JSON.stringify(notesList))
			}else{
				setNotes()
				deleteAllNotes()
			}

	  } catch (error) {
	  	console.log(error)
	  }
	}

	const deleteAllNotes = async ()=>{
		try {
	    await AsyncStorage.removeItem('@Notes')
	  } catch (error) {
	  	console.log(error)
	  }
	}

	useEffect(()=>{
		getNotes()
			.then(response=>{
				if(response !== null && notes == null){
		      	setNotes(response)
		      }
			})
	}, [])

	return{
		getNotes,
		createNote,
		updateNote,
		deleteAllNotes,
		deleteNote
	}
}
