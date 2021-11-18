import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Button, Text, View, TextInput, Image, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


import WorkoutScreen from './screens/WorkoutScreen'
import MeScreen from './screens/MeScreen'
import LogScreen from './screens/LogScreen'

const Tab = createBottomTabNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Workout" component={WorkoutScreen} />
          <Tab.Screen name="Log" component={LogScreen} />
          <Tab.Screen name="Me" component={MeScreen} />
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
  }

});