import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Picker,
  Button,
  ImageBackground,
} from 'react-native';
import SingleMealCard from '../components/SingleMealCard';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const SingleMealScreen = (props) => {
  console.log(props.route);

  const meal = MEALS.find((meal) => {
    return meal.id === props.route.params.mealId;
  });

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity>
        <View>
          {/* Top Card Section */}
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.imgBG}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{meal.title}</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Bottom Card Section */}
          <View style={[styles.mealRow, styles.mealDetail]}>
            <Text>${meal.price} </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ddd',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgBG: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    height: 20,
    width: 40,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonText:{
    margin: 2,
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default SingleMealScreen;
