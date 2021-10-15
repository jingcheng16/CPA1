import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
    const [info, setInfo] = useState({username:'',height:'',weight:''});
    const [username, setUsername] = useState('');
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');

    useEffect(() => {getData()},[])

    const getData = async () => {
        try {
            // the '@profile_info' can be any string
            const jsonValue = await AsyncStorage.getItem('@profile_info')
            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                setInfo(data)
                setUsername(data.username)
                setHeight(data.height)
                setWeight(data.weight)
                console.log('just set Info, Name, Height and Weight')
            } else {
                console.log('just read a null value from Storage')
                setInfo({})
                setUsername("")
                setHeight("")
                setWeight("")
            }


        } catch (e) {
            console.log("error in getData ")
            console.dir(e)
            // error reading value
        }
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@profile_info', jsonValue)
            console.log('just stored ' + jsonValue)
        } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
            // saving error
        }
    }

    return (
        <ScrollView>
            <View style={styles.horizontal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        onChangeText = {text => setUsername(text)}
                        value = {username}
                    />
                    <Image source={{ uri: 'https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg' }}
                        style={{ width: 100, height: 100 }} />
                </View>

                <View style={styles.container}>

                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text> Body Measurement </Text>

                        <View style={styles.horizontal}>
                            <Text> Height: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Height"
                                keyboardType="numeric"
                                onChangeText = {text => {setHeight(text)}}
                                value = {height}
                            />
                            <Text>cm</Text>
                        </View>

                        <View style={styles.horizontal}>
                            <Text> Weight: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Weight"
                                keyboardType="numeric"
                                onChangeText = {text => {setWeight(text)}}
                                value = {weight}
                            />
                            <Text>lbs</Text>
                        </View>
                        <Button title="Submit" color="red" onPress = {
                            () => {
                                console.log("saving profile");
                                const theInfo = {username:username,height:height,weight:weight}
                                console.log(`theInfo=${theInfo}`)
                                setInfo(theInfo)
                                console.log('data='+JSON.stringify(theInfo))
                                storeData(theInfo)
                            }
                        }/>

                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})