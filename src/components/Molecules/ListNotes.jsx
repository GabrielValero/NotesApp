import React, {useContext} from 'react'
import { FlatList, View, Image, Text }from 'react-native'

import Card from './Card'

import NoteContext from '../../context/NoteContext'

export default function ListNotes(){

	const { notes } = useContext(NoteContext)

	return(
		<View style={{flexDirection: "row", width: '100%', flexWrap: 'wrap', justifyContent: 'center'}}>
			{notes ? notes.map(note=> <Card item={note} key={note.id}/>)
			: 
			<View style={{width:"100%", height: "100%", alignItems: 'center', justifyContent: 'center'}}>
				<Image source={require('../../../assets/empty.png')} style={{width: "100%", height: "70%", resizeMode: "contain"}}/>
				<Text style={{fontSize: 40, fontWeight: 'bold', color: "white"}}>Crea una nota</Text>
			</View>
			}
		</View>
	)
}