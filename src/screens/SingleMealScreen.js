import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Picker,
  Button,
} from 'react-native';
import SingleMealCard from '../components/SingleMealCard';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const SingleMealScreen = (props) => {
  console.log(props.route);

  // const catId = props.route.params.categoryId;
  // const category = CATEGORIES.find((cat) => cat.id === catId);
  // const displayedMeals = MEALS.filter(
  //   (meal) => meal.categoryIds.indexOf(catId) >= 0
  // );

  // const renderItems = (itemData) => {
  //   return <SingleMealCard mealData={itemData.item} />;
  // };

  // return <FlatList data={displayedMeals} renderItem={renderItems} />;

  return (
    <FlatList
      data={MEALS}
      renderItem={(itemData) => {
        return (
          <View>
            <TouchableOpacity
              style={styles.card}
              // pass data on a click
            >
              <Text style={styles.title}>{itemData.title}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3332',
    margin: 20,
    padding: 20,
  },
  title: {
    // color: '#eee',
  },
});

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     marginTop: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     width: 200,
//     height: 50,
//     borderRadius: 10,
//   },
// });

export default SingleMealScreen;
