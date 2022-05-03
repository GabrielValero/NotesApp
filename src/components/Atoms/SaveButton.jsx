import React from 'react'

import {Pressable, StyleSheet} from 'react-native'

import { AntDesign } from '@expo/vector-icons';

import color from '../../utils/color'

export default function SaveButton({onPress}){
	return(
		<Pressable style={styles.button} onPress={onPress}>
			<AntDesign name="check" size={24} color={color.mainColor} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button:{
		backgroundColor: "white",
		width: 50, 
		height: 50, 
		borderRadius: 30, 
		justifyContent: 'center', 
		alignItems: 'center'
	}
})