import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScreenView, TouchableOpacity, TextInput, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import useNotes from '../../hooks/useNotes'

import FooterBar from '../Molecules/FooterBar'

import colorsPalette from '../../utils/colorsPalette'

export default function CreateNoteScreen({route}){
	const navigation = useNavigation();

	const {noteEditable} = route.params;

	const { updateNote } = useNotes()

	const [title, setTitle] = useState(noteEditable !== null ? noteEditable.title : null)
	const [body, setBody] = useState(noteEditable !== null ? noteEditable.body : null)
	const [colors, setColors] = useState(noteEditable !== null ? noteEditable.colors : colorsPalette[0])

	const handleOnSubmit = ()=>{

		if(title === null || title === '' || body === null || body === ''){
			Alert.alert(
				"Atencion!",
				"Falta llenar los campos",
				[
				  {
				    text: "Ok",
				    style: "cancel",
				  },
				],
			);
		}else{
			const date = new Date()
			updateNote({noteUpdate:{
				title,
				body,
				colors,
				id: noteEditable.id,
				date
			}})
			navigation.popToTop()
		}
	}

	useEffect(()=>{
		if(noteEditable !== null){
			setTitle(noteEditable.title)
			setBody(noteEditable.body)
			setColors(noteEditable.colors)
		}
	},[noteEditable])
	return(
		<View style={[styles.container, {backgroundColor: colors.background}]}>
			<TextInput style={{width: '100%', color:colors.textColor, padding: 20, fontSize: 20}}
			 textAlignVertical={"top"} placeholder="Título de la nota" placeholderTextColor="#374067" value={title} onChangeText={setTitle}/>
			<TextInput style={{width: '100%', height: '70%', color:colors.textColor, padding: 20,}}
			  textAlignVertical={"top"} placeholder="Escribe una Nota" placeholderTextColor="#374067"
			  value={body} onChangeText={setBody} multiline={true} numberOfLines={4}/>
			<FooterBar colors={colors.background} setColors={setColors} handleOnSubmit = {handleOnSubmit}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1, 
		alignItems: 'center'
	},
	button:{
		width: '80%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: "#28D17B",
	},
	text:{
		fontSize: 17,
		fontWeight:'bold',
		color: 'white'
	}
})