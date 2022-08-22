import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterAsScreen from '../screens/Register/RegisterAsScreen';
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import RegisterCostumer from '../screens/Register/RegisterCostumer';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RegisterAs" component={RegisterAsScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="RegisterCostumer" component={RegisterCostumer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;