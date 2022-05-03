import React from 'react'
import { View, Text } from 'react-native' 

import ListNotes from '../Molecules/ListNotes'

import color from '../../utils/color'

export default function ListNotesScreen(){
	return(
		<View style={{backgroundColor: color.background, flex:1,}}>
			<ListNotes/>
		</View>
	)
}