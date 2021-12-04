import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LogScreen = () => {
    useEffect(() => {getData()},[])
    useEffect(() => {getDateList()},[])

    const [exerciseList, setExerciseList] = useState([]);
    const [date, setDate] = useState("");
    const [dateList, setDateList] = useState([]);
    

    const getDateList = async () => {
        try {
            // the '@profile_info' can be any string
            const jsonValue = await AsyncStorage.getItem('@dateList')
            console.log(jsonValue);
            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                setDateList(data)
                console.log('just set Date List')
            } else {
                console.log('just read a null date list from Storage')
                // setDateList([])
            }


        } catch (e) {
            console.log("error in getData ")
            console.dir(e)
            // error reading value
        }
    }

    const getData = async (value) => {
        try {
            // the '@profile_info' can be any string
            const jsonValue = await AsyncStorage.getItem(value)
            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                setExerciseList(data)
                console.log('just set Exercise List')
            } else {
                console.log('just read a null list from Storage')
                setExerciseList([])
            }


        } catch (e) {
            console.log("error in getData ")
            console.dir(e)
            // error reading value
        }
    }

    return (
        <View>
            <Button title="get" onPress={() => getDateList()} />
            {dateList.map(date => (
                <TouchableOpacity onPress = {()=> getData(date)}>
                    <Text key={date}>{date}</Text> 
                </TouchableOpacity>
            ))}
            {exerciseList.map(exercise => (<Text key={exercise.id}>{exercise.value}</Text>))}
        </View>

    )
}

const styles = StyleSheet.create({
    
})

export default LogScreen;
