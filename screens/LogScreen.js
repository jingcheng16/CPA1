import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import AsyncStorage from '@react-native-async-storage/async-storage';


let content = <githubScreen />
const LogScreen = () => {
    useEffect(() => {getData()},[])

    const [exerciseList, setExerciseList] = useState([]);


    const getData = async () => {
        try {
            // the '@profile_info' can be any string
            const jsonValue = await AsyncStorage.getItem('@record')
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

    return(
        <View>
            <BodyText>
                Log
            </BodyText>
            <Text>
                Log
            </Text>
            <Button title = "get" onPress = {()=> getData()}/>
            <Text>
                {JSON.stringify({exerciseList})}
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    
})

export default LogScreen;
