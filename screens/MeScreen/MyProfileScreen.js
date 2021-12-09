import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useValue } from '../../components/ValueContext';


export default function App() {
    const [info, setInfo] = useState({ username: '', email: '', height: '', weight: '' });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    // it should be some number, not text. So the intial state should be nothing, not a blank string
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();

    // useEffect will execute after the component rerendered.
    // first argument is the function you executed after rerender the component
    // the second argument is an array of dependencies of this function
    useEffect(() => { getData() }, [])

    let { currentValue, setCurrentValue } = useValue()

    const getData = async () => {
        try {
            // the '@profile_info' can be any string
            const jsonValue = await AsyncStorage.getItem('@profile_info')
            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                setInfo(data)
                setUsername(data.username)
                setEmail(data.email)
                setHeight(data.height)
                setWeight(data.weight)
                console.log('just set Info, Name, Email, Height and Weight')
            } else {
                console.log('just read a null value from Storage')
                setInfo({})
                setEmail("")
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

    const submitHandler = () => {
        console.log("saving profile");
        const theInfo = { username: username, email: email, height: height, weight: weight };
        console.log(`theInfo=${theInfo}`)
        setInfo(theInfo);
        console.log('data=' + JSON.stringify(theInfo))
        storeData(theInfo);
    }


    return (
        <TouchableWithoutFeedback onPress={
            () => { Keyboard.dismiss(); }
        }>
            <View style={styles.screen}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        onChangeText={text => setUsername(text)}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        onChangeText={text => {
                            setEmail(text),
                                setCurrentValue(
                                    {
                                        name: currentValue.name,
                                        email: text
                                    })
                        }
                        }
                        autoCapitalize="none"
                        value={email}
                    />
                    {/* <Image source={{ uri: 'https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg' }}
                        style={{ width: 100, height: 100 }} /> */}
                </View>

                <View style={styles.container}>

                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text> Body Measurement </Text>

                        <View style={styles.horizontal}>
                            <Text> Height: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Height"
                                keyboardType="numeric"
                                //Not allow any non digit input
                                onChangeText={text => { setHeight(text.replace(/[^0-9]/g, '')) }}
                                value={height}
                                maxLength={3}
                            />
                            <Text>cm</Text>
                        </View>

                        {/* FIXME: keyboard pop up will cover the textinput */}

                        <View style={styles.horizontal}>
                            <Text> Weight: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Weight"
                                keyboardType="numeric"
                                onChangeText={text => { setWeight(text.replace(/[^0-9]/g, '')) }}
                                value={weight}
                                maxLength={3}
                            />
                            <Text>lbs</Text>
                        </View>
                        <Button title="Submit" color="red" onPress={submitHandler} />

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
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