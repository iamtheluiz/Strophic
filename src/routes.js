import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './config/colors';

import Home from './pages/Home';
import List from './pages/List';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'List') {
              iconName = 'music';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: colors.background,
            elevation: 0,
            marginTop: 0,
            borderTopWidth: 0,
          },
          activeTintColor: colors.primary,
          inactiveTintColor: colors.secondary,
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
