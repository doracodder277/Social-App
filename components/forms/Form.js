import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PersonalInfoScreen from './PersonalInfoScreen';
import ContactInfoScreen from './ContactInfoScreen';
import ReviewScreen from './ReviewScreen';
import globalStyles from '../../Styles';

const Tab = createBottomTabNavigator();

export default function Form() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerStyle: {
          backgroundColor: globalStyles.secondaryColor.color,
        },
        headerTintColor: globalStyles.primaryColor.color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {backgroundColor: '#211402'},
        tabBarShowLabel: false,
      }}
    initialRouteName="PersonalInfo">
        <Tab.Screen 
            name="PersonalInfo" 
            component={PersonalInfoScreen} 
            options={{
              tabBarIcon: ({ focused }) => {
                let sz = focused ? 40 : 30;
                return <MaterialCommunityIcons name="numeric-1-circle" size={sz} color='#ce7704' />
              },
            }}
        />
        <Tab.Screen 
            name="ContactInfo" 
            component={ContactInfoScreen} 
            options={{
              tabBarIcon: ({ focused }) => {
                let sz = focused ? 40 : 30;
                return <MaterialCommunityIcons name="numeric-2-circle" size={sz} color='#ce7704' />
              },
            }}
        />
        <Tab.Screen 
            name="Review" 
            component={ReviewScreen} 
            options={{
              tabBarIcon: ({ focused }) => {
                let sz = focused ? 40 : 30;
                return <MaterialCommunityIcons name="numeric-3-circle" size={sz} color='#ce7704' />
              },
            }}
        />
    </Tab.Navigator>
  );
}
