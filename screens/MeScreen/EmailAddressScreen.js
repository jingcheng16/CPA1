import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useValue } from '../../components/ValueContext';

const EmailAddressScreen = props => {
    let { currentValue, setCurrentValue } = useValue()

    return (
        <View style={styles.screen}>
            <Text>{currentValue.email}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EmailAddressScreen;