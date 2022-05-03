import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, Pressable, TextInput, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import useNotes from '../../hooks/useNotes'

import FooterBar from '../Molecules/FooterBar'

import colorsPalette from '../../utils/colorsPalette'
import color from '../../utils/color'


export default function CreateNoteScreen({route}){
	const navigation = useNavigation();
	const {noteEditable} = route.params;
	const {deleteNote} = useNotes()

	const handleNavigation = ()=>{
		navigation.navigate("UpdateNoteStack", {noteEditable})
	}

	const deleteById = ()=>{
		deleteNote({id:noteEditable.id})
		navigation.popToTop()
	}

	return(
		<View style={[styles.container, {backgroundColor: color.background}]}>
			<View style={styles.buttonsContainer}>
				<Pressable style={styles.buttons} onPress={handleNavigation}>
					<Feather name="edit-2" size={30} color={color.mainColor} />
				</Pressable>
				<Pressable style={styles.buttons} onPress={deleteById}>
					<Feather name="trash" size={30} color={color.mainColor} />
				</Pressable>
			</View>
			<ScrollView style={[styles.noteContainer, {backgroundColor: noteEditable.colors.background}]}>
				<Text style={styles.title}>{noteEditable.title}</Text>
				<Text style={styles.body}>{noteEditable.body}</Text>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1, 
		alignItems: 'center'
	},
	buttonsContainer:{
		flexDirection: 'row',
		width: "100%",
		height: 60,
		margin: 15,
		justifyContent: 'flex-end'
	},
	noteContainer:{
		width: "90%",
		height: '80%',
		padding: 30,
		borderRadius: 30,
	},
	buttons:{
		width: 44,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		margin: 5,
	},
	title:{
		textAlign: 'center',
		marginBottom: 20,
		fontSize: 25,
		fontWeight:'bold',
		color: 'white'
	},
	body:{
		fontSize: 17,
		color: 'white'
	}
})