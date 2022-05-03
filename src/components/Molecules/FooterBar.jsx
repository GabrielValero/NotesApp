import React, {useState} from 'react'
import {View, Pressable, StyleSheet} from 'react-native'

import SaveButton from '../Atoms/SaveButton'

import colorsPalette from '../../utils/colorsPalette'

export default function FooterBar({setColors, handleOnSubmit, colors}){

	const [active, setActive] = useState(colors ? colors : colorsPalette[0].background)
	
	const onPress = ({color})=>{
		setColors(color)
		setActive(color.background)
	}

	return(
		<View style={styles.container}>
			<SaveButton onPress={handleOnSubmit}/>
			<View style={{flexDirection: 'row'}}>
				{colorsPalette.map((color)=>(
					<Pressable style={[styles.squareColor, {borderColor: "white", backgroundColor:color.background, borderWidth: active === color.background ? 2 : 0}]}
					 onPress={()=>onPress({color})} key={color.background}>
					</Pressable>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		marginBottom: 10,
		alignItems: 'center',
	},
	squareColor:{
		width: 30, 
		height: 40, 
		margin: 7, 
		borderRadius: 44, 
	},
})