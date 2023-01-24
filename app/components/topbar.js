import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/profile';
import Stream from '../screens/stream';
import SettingsScreen from '../screens/settings';
import SignoutScreen from '../screens/signout';

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Stream" component={Stream} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Sign out" component={SignoutScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}