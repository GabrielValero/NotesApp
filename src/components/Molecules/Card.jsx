import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import NoteContext from '../../context/NoteContext'

export default function Card({item}){

	const navigation = useNavigation();

	const {setNoteEditable} = useContext(NoteContext)

	const [active, setActive] = useState(true)


	return(
		<Pressable style={[styles.cardContainer, {backgroundColor: item.colors.background,}]} onPress={()=>	navigation.navigate("DetailNoteStack", {noteEditable: item})}>
			<Text style={styles.text}>{item.title}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	cardContainer:{
		width: "45%",
		height: 150,
		borderRadius: 30,
		padding: 20,
		margin: 7
	},
	text:{
		color: 'white',
		fontWeight: 'bold'
	},
	modal:{
		width: "100%",
		height: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row'
	},
	buttons:{
		width: 50,
		height: 50,
		borderRadius: 40,
		backgroundColor: '#141724',
		justifyContent: 'center',
		alignItems: 'center'
	}
})