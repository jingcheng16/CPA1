import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView, FlatList } from 'react-native';
import ExerciseItem from './workout/ExerciseItem';
import ExerciseInput from './workout/ExerciseInput'

export default function App() {
    
    const [exerciseList, setExerciseList] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);



    const addExerciseHandler = exerciseTitle => {
        setExerciseList(currentList => [...currentList, { id: Math.random().toString(), value: exerciseTitle }]);
        setIsAddMode(false);
    };

    const removeExerciseHandler = exerciseId => {
        setExerciseList(currentList => {
            return currentList.filter(exercide => exercise.id !== exerciseId)
        })
    }

    const cancelExerciseAdditionHandler = () => {
        setIsAddMode(false);
    }


    return (
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <Button title="+NEW" />
                <Button title="YOUR GYM" />
                <Button title="..." />
            </View>
            <Button title = "Add new Exercise" onPress = {()=> setIsAddMode(true)}/>
            <ExerciseInput visible = {isAddMode} onAddExercise = {addExerciseHandler} onCancel = {cancelExerciseAdditionHandler}/>
            <FlatList data={exerciseList}
                renderItem={itemData => <ExerciseItem title={itemData.item.value} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderColor: 'grey',
        borderWidth: 1,
    },
})