import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Button, Text, View, TextInput, Image, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from './constants/color';


import WorkoutScreen from './screens/WorkoutScreen'
import MeScreen from './screens/MeScreen'
import LogScreen from './screens/LogScreen'
import ExerciseCategoriesScreen from './screens/ExerciseCategoriesScreen';

const Tab = createBottomTabNavigator();

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Workout') {
              iconName = focused
                ? 'barbell'
                : 'barbell-outline';
            } else if (route.name === 'Log') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Exercise') {
              iconName = focused ? 'grid' : 'grid-outline'
            } else {
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: Colors.primaryColor, },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', },
        })}>
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Exercise" component={ExerciseCategoriesScreen} />
        <Tab.Screen name="Log" component={LogScreen} />
        <Tab.Screen name="Me" component={MeScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  plaintext: {
    fontSize: 23,
    color: 'black',
  },

});