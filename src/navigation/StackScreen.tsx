import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import SearchWeatherScreen from '../screens/SearchWeatherScreen';
const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="SearchWeatherScreen" component={SearchWeatherScreen} />

        </Stack.Navigator>
    );
};

export default StackScreen;