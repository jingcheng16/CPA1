import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const FeedbackScreen = () => {
    return(
        <View style = {styles.screen}>
            <Text>The Feedback Screen!</Text>
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

export default FeedbackScreen;