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
// import OrderForm from '../components/OrderForm';

const SingleMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>My Single Meal Screen!</Text>
      <TouchableOpacity style={styles.button} onPress={props.onSelect}>
        <Text>order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderRadius: 10,
  },
});

export default SingleMealScreen;
