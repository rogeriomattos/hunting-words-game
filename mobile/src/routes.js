import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
 
import Main from './pages/Main';
import { Easy } from './pages/Easy';

export default function Routes() {

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name={"Main"} component={Main}/>
                <AppStack.Screen name={"Easy"} component={Easy}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}