import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      }}
    initialRouteName="PersonalInfo">
        <Tab.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Tab.Screen name="ContactInfo" component={ContactInfoScreen} />
        <Tab.Screen name="Review" component={ReviewScreen} />
    </Tab.Navigator>
  );
}
