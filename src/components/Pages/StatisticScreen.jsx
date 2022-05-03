import React, {useContext} from 'react'
import {View, Text, Image} from 'react-native'

import color from '../../utils/color'

import NoteContext from '../../context/NoteContext'

export default function StatisticSceen(){

	const {notes} = useContext(NoteContext)

	const orderNote = notes ? notes.sort((a,b)=> a < b ? -1 : 1) : null

	const recent = orderNote ? new Date(orderNote[0].date): null
	const recentHour = orderNote ? recent.toLocaleTimeString() : null
	const oldest = orderNote ? new Date(orderNote[orderNote.length-1].date): null
	const oldestHour = orderNote ? oldest.toLocaleTimeString(): null

	return(
		<View style={{backgroundColor: color.background, flex:1, alignItems: 'center'}}>
			{notes ? 
			<View style={{width:"80%", height: "100%", alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{fontSize: 17, fontWeight: 'bold', color: "#848899"}}>Cantidad de notas: {orderNote.length}</Text>
				<Text style={{fontSize: 17, fontWeight: 'bold', color: "#848899"}}>Nota mas reciente: {recent.toLocaleDateString('en-GB')} a las {recentHour}</Text>
				<Text style={{fontSize: 17, fontWeight: 'bold', color: "#848899"}}>Nota mas vieja: {oldest.toLocaleDateString('en-GB')}a las {oldestHour}</Text>
			</View>
			:<View style={{width:"80%", height: "100%", alignItems: 'center', justifyContent: 'center'}}>
				<Image source={require('../../../assets/statistic.png')} style={{width: "100%", height: "50%", resizeMode: "contain"}}/>
				<Text style={{fontSize: 40, fontWeight: 'bold', color: "white"}}>No hay notas</Text>
			</View>}
		</View>
	)
}
