import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )
}
