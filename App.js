import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/Navigation/TabNavigator'
import {NoteProvider} from './src/context/NoteContext'

import Container from './src/components/Container'

export default function App() {
  return (
    <NoteProvider>
      <NavigationContainer>
        <Container>
          <TabNavigator/>
        </Container>
      </NavigationContainer>
    </NoteProvider>
  );
}
