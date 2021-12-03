// When you click add Exercise, this will pop up.
// When you are editing your exercise, this will also pop up.
// This is also for you to view, edit your screen, so I'm consider adding this to the tab navigation

import React from 'react';
import {View, Text, FlatList,StyleSheet, TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import {CATEGORIES} from '../data/dummy-data';
import ExerciseListScreen from './ExerciseListScreen';
import CategoryGridTile from '../components/exercise/CategoryGridTile';

const ExerciseCategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title = {itemData.item.title} 
                              onSelect = {()=>{props.navigation.navigate('List',{categoryId:itemData.item.id})}}/>
        )
    }


    return(
        <FlatList 
            data = {CATEGORIES} 
            renderItem = {renderGridItem} 
            numColumns = {2}/>
    )
};

ExerciseCategoriesScreen.navigationOptions = {
    headerTitle:'Exercise Categories',
    headerStyle:{backgroundColor:'black'}
};

const Stack = createNativeStackNavigator();

const App = () =>{
    return(
            <Stack.Navigator screenOptions = {{presentation:"modal"}}>
                <Stack.Screen name="Home" 
                              component={ExerciseCategoriesScreen}
                              options = {{headerShown:false}} />
                <Stack.Screen name="List" 
                              component={ExerciseListScreen} />
            </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default App;
// export default ExerciseCategoriesScreen;