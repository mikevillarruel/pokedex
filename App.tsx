import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='transparent'
        translucent={true}
        barStyle='dark-content'
      />
      <Navigator />
    </NavigationContainer>
  )
}

export default App;