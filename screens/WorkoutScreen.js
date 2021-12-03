import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView, FlatList } from 'react-native';

import ExerciseItem from '../components/workout/ExerciseItem';
import ExerciseInput from '../components/workout/ExerciseInput';
import Colors from '../constants/color'

import AsyncStorage from '@react-native-async-storage/async-storage';


const WorkoutScreen = props => {
    
    const [exerciseList, setExerciseList] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    

    const addExerciseHandler = exerciseTitle => {
        if (exerciseTitle != '') {
        setExerciseList(currentList => [...currentList, { id: Math.random().toString(), value: exerciseTitle }]);
        }
        setIsAddMode(false);
        
    };

    const removeExerciseHandler = exerciseId => {
        setExerciseList(currentList => {
            return currentList.filter(exercise => exercise.id !== exerciseId);
        })
    }

    const cancelExerciseAdditionHandler = () => {
        setIsAddMode(false);
    }
    
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@record', jsonValue)
            console.log('just stored ' + jsonValue)
        } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
            // saving error
        }
    }


    return (
        <View style = {styles.screen}>
            <Button title = "Add new Exercise" onPress = {()=> setIsAddMode(true)}/>
            <ExerciseInput visible = {isAddMode} onAddExercise = {addExerciseHandler} onCancel = {cancelExerciseAdditionHandler}/>
            <FlatList 
            keyExtractor = {(item, index) => item.id}
            data={exerciseList}
            renderItem={itemData => <ExerciseItem id = {itemData.item.id} title={itemData.item.value} onDelete = {removeExerciseHandler}/>}
            />
            <Button title = "save" onPress = {() => storeData(exerciseList)}/>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10, 
        alignItems: 'center',
    },
    horizontal: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },
})

export default WorkoutScreen;