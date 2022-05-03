import React from 'react'
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native'

import color from '../utils/color'

export default function Container({children}){
	return(
		<SafeAreaView style={styles.container}>
      {children}
      <StatusBar backgroundColor={color.backroundColor}/>
    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
	}
})