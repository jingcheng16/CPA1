import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native'

import {CATEGORIES, EXERCISES} from '../data/dummy-data';
import ExerciseItem from '../components/exercise/ExerciseItem';

const ExerciseListScreen = ({route, navigation}) => {
    const catId = route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);
    const displayedExercise = EXERCISES.filter(exercise => exercise.categoryIds.indexOf(catId) >= 0)

    const renderExerciseItem = itemData => {
        return <ExerciseItem title = {itemData.item.title} onSelectExercise = {()=>{}} />;
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: selectedCategory.title,
          headerStyle: {backgroundColor: "white",}
        });
      }, [navigation, selectedCategory]);

    return(
        
        <View style = {styles.screen}>
            <FlatList data = {displayedExercise} 
                      keyExtractor = {(item,index) => item.id}
                      renderItem = {renderExerciseItem}
                      style = {{width: '95%',}}
                      contentContainerStyle = {{alignItems:'stretch'}} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ExerciseListScreen;