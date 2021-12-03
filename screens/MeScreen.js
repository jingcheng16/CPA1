import React from 'react';
import {View, Text, Button, TouchableWithoutFeedbackComponent, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StackButton from '../components/StackButton';

import EmailAddressScreen from './MeScreen/EmailAddressScreen';
import ChangePasswordScreen from './MeScreen/ChangePasswordScreen';
import FeedbackScreen from './MeScreen/FeedbackScreen';
import MyProfileScreen from './MeScreen/MyProfileScreen';
import PreferencesScreen from './MeScreen/PreferencesScreen';

const HomeScreen = ({navigation}) => {
    console.log({navigation});

    return (
        <View>
            <View style = {{paddingVertical:10}}>
                <StackButton onPress = {()=>{navigation.navigate('Email')}}>Email Address</StackButton>
                <StackButton onPress= {()=>{navigation.navigate('Password')}}>Change Password</StackButton>
                <StackButton onPress= {()=>{navigation.navigate('Preferences')}}>Preferences</StackButton>
                <StackButton onPress = {() => {navigation.navigate('Body Measurements')}}>Body Measurements</StackButton>
                <StackButton onPress = {() => {navigation.navigate('Feedback')}}>Feedback</StackButton>
            </View>
            <View style = {{paddingVertical:10}}>
                <StackButton>Log Out</StackButton>
            </View>

        </View>
        
    )
}

const Stack = createNativeStackNavigator();

const App = () =>{
    return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Me"}} />
                <Stack.Screen name="Email" component={EmailAddressScreen} />
                <Stack.Screen name="Password" component = {ChangePasswordScreen}/>
                <Stack.Screen name="Preferences" component={PreferencesScreen} />
                <Stack.Screen name="Body Measurements" component={MyProfileScreen} />
                <Stack.Screen name="Feedback" component={FeedbackScreen}/>
            </Stack.Navigator>
    )
}

const styles = StyleSheet.create({});

export default App;