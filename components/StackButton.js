import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/color'

const StackButton = props => {
    return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
            <AntDesign name="right" size={17} color="darkgray" />
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: 'black',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default StackButton;