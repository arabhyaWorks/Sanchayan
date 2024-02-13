import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  OthersIcon,
  TempleIcon,
  FoodIcon,
  TicketsIcons,
} from '../components/SvgIcon';
import About from '../Home/About';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#B01432',
        tabBarLabelStyle: {fontWeight: '400', fontSize: 11},
        tabBarStyle: {backgroundColor: '#FFFEDE'},
        headerTintColor: 'black',
        headerStyle: {backgroundColor: '#FDFAE7'},
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 20},
      }}>
      <Tab.Screen
        name="Home1"
        component={About}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <HomeIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home2"
        component={About}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <TicketsIcons color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home3"
        component={About}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <FoodIcon color={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
