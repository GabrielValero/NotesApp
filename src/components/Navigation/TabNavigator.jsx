import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//Stack
import { CreateNoteStack, ListNotesStack, StatisticStack } from './StackNavigator'

//utils
import color from '../../utils/color'

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
  return(
    <Tab.Navigator
      initialRouteName="ListNotesTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#28D17B',
        tabBarInactiveTintColor: "#374067",
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: '#141724',
          borderTopWidth: 0,
        },
      }}>

      <Tab.Screen name="CreateNoteTab" component={CreateNoteStack}
        options = {{
          tabBarIcon: ({focused, color, size=30}) =>(
            <Ionicons name="create-outline" size={size} color={color} focused={focused}/>
          )
        }}
      />

      <Tab.Screen name="ListNotesTab" component={ListNotesStack}
        options = {{
          tabBarIcon: ({focused, color, size=30}) =>(
            <Entypo name="list" size={size} color={color} focused={focused}/>
          )
        }}
      />

      <Tab.Screen name="StatisticTab" component={StatisticStack}
        options = {{
          tabBarIcon: ({focused, color, size=30}) =>(
            <SimpleLineIcons name="graph" size={size} color={color} focused={focused}/>
          )
        }}
      />

    </Tab.Navigator>
  )
}
