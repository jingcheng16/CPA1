import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return(
        <TouchableOpacity style = {styles.gridItem} 
                          onPress={props.onSelect}>
            <View style = {styles.container}>
                <Text style = {styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 90,
        borderRadius:10,
    },
    container:{
        flex: 1,
        borderRadius:10,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign: 'right',
        color: "tomato",
    }
});

export default CategoryGridTile;