import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Home from '../screens/Home/Home';
import Watchlist from '../screens/Watchlist/Watchlist';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#181818',
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Watchlist'
        component={Watchlist}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='star' size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
