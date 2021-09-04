import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { RootStackParams } from './TabList';

const Tab = createStackNavigator<RootStackParams>();

export const TabSearch = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Tab.Screen name="HomeScreen" component={SearchScreen} />
            <Tab.Screen name="PokemonScreen" component={PokemonScreen} />
        </Tab.Navigator>
    )
}