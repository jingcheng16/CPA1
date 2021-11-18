import React from 'react';
import {View, Text, Button, TouchableWithoutFeedbackComponent, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import MyProfileScreen from './MeScreen/MyProfileScreen';
import StackButton from '../components/StackButton';

const MeScreen = () => {
    return (
        // FIXME: add a stackNavigator
        <View>
            <View style = {{paddingVertical:10}}>
                <StackButton>Email Address
                </StackButton>
                <StackButton>Change Password</StackButton>
                <StackButton>Preferences</StackButton>
                <StackButton onPress = {() => {}}>Body Measurements</StackButton>
                <StackButton onPress = {() => {}}>Feedback</StackButton>
            </View>
            <View style = {{paddingVertical:10}}>
                <StackButton>Log Out</StackButton>
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({});

export default MeScreen;