import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} autoCapitalize = 'sentences' autoCorrect = {true} style = {{...styles.input, ...props.style}}/>
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center',
    },
});

export default Input;