import React from 'react';
import { Image } from 'react-native';

import Chats from './screens/Chats/Chats';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import People from './screens/People/People';
import Discover from './screens/Discover/Discover';
import { images } from './images';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chats') {
              iconName = focused ? images.chat_active : images.chat_inactive;
            } else if (route.name === 'People') {
              iconName = focused
                ? images.people_active
                : images.people_inactive;
            } else if (route.name === 'Discover') {
              iconName = focused
                ? images.discover_active
                : images.discover_inactive;
            }

            // You can return any component that you like here!
            return <Image source={iconName} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        //   showLabel: false,
        // }}
      >
        <Tab.Screen name='Chats' component={Chats} />
        <Tab.Screen name='People' component={People} />
        <Tab.Screen name='Discover' component={Discover} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
