import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import CreateNoteScreen from '../Pages/CreateNoteScreen'
import UpdateNoteScreen from '../Pages/UpdateNoteScreen'
import DetailNoteScreen from '../Pages/DetailNoteScreen'
import ListNotesScreen from '../Pages/ListNotesScreen'
import StatisticSceen from '../Pages/StatisticScreen'


const Stack = createNativeStackNavigator();

export function CreateNoteStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CreateNoteStack" component={CreateNoteScreen} />
    </Stack.Navigator>
  );
}

export function ListNotesStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ListNotesStack" component={ListNotesScreen} />
      <Stack.Screen name="UpdateNoteStack" component={UpdateNoteScreen} />
      <Stack.Screen name="DetailNoteStack" component={DetailNoteScreen} />
    </Stack.Navigator>
  );
}

export function StatisticStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StatisticStack" component={StatisticSceen} />
    </Stack.Navigator>
  );
}