import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const PreferencesScreen = props => {
    return(
        <View style = {styles.screen}>
            <Text>The Preference Screen!</Text>
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

export default PreferencesScreen;