/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import BookmarkScreen from './BookmarkScreen';
import MoreScreen from './MoreScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BookScreen from './BookScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Comic"
      component={HomeScreen}
      options={{headerBackTitleVisible: false, headerLeft: false}}
    />
  </Stack.Navigator>
);

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: '#350472',
      }}
      backgroundColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BookScreen}
        options={{
          tabBarLabel: 'My Books',
          tabBarIcon: ({color}) => (
            <Ionicons name="book-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({color}) => (
            <Ionicons name="bookmark-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={({route}) => ({
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Ionicons name="apps-outline" color={color} size={26} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
