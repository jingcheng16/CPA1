import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ExerciseItem = props => {
    return (
        <View style={styles.exerciseItem}>
            <TouchableOpacity onPress={props.onSelectExercise}>
                <View>
                    <Text style = {styles.itemtext}>{props.title}</Text>
                </View>
            </TouchableOpacity >
        </View>
    );
};

const styles = StyleSheet.create({
    exerciseItem:{
        height: 40,
        width: '97%',
        backgroundColor:'lightgray',
        margin:5,
        justifyContent:'center',
        padding:10,
        borderRadius:5,
    },
    itemtext:{
        fontFamily:'open-sans',
        fontSize:15,
    }

});

export default ExerciseItem;