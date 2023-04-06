import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './components/forms/Form'
import HomeScreen from "./components/HomeScreen";
import AboutMe from "./components/AboutScreen"
import Loading from "./components/LoadingScreen"
import globalStyles from './Styles';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: globalStyles.secondaryColor.color,
            },
            headerTintColor: globalStyles.primaryColor.color,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutMe} />
          <Stack.Screen name="Form" component={Form} options={{headerShown: false}}/>
          <Stack.Screen name="Loading" component={Loading} options={{headerTitle: "", headerLeft: null}} />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}
