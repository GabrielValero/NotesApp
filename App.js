import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/Navigation/TabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
