/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Auth Screens
import LoginScreen from '../screens/authScreens/LoginScreen';
import RegisterScreen from '../screens/authScreens/RegisterScreen';
import WelcomeScreen from '../screens/authScreens/RegisterScreen';

const Auth = createStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Welcome" component={WelcomeScreen} />
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
      <Auth.Screen name="Register" component={RegisterScreen} />
    </Auth.Navigator>
  );
}
