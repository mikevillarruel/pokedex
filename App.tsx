import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='rgba(0,0,0,0.3)'
        translucent={true}
        barStyle='light-content'
      />
      <Tabs />
    </NavigationContainer>
  )
}

export default App;