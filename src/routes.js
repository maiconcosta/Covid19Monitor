import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Reports from './pages/Reports';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#ff546a" />

            <AppStack.Navigator 
             screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff546a' },
              }}>
                <AppStack.Screen name="Reports" component={Reports}
                    options={{
                        title: 'Covid-19 no Brasil'                       
                    }} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}