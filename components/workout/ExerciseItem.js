import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const ExerciseItem = (props) => {
    return (
        <TouchableOpacity activeOpacity= {0.7}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },
})

export default ExerciseItem;