import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: Platform.OS === 'android' ? 5 : 0,
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                },
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
        >

            <Tab.Screen
                name="Navigator"
                component={Navigator}
                options={{
                    tabBarLabel: 'Listing',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='list-outline'
                            color={color}
                            size={25}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name='search-outline'
                            color={color}
                            size={25}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}
