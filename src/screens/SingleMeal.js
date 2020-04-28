import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Picker,
} from 'react-native';
// import OrderForm from '../components/OrderForm';

const SingleMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>My Single Meal Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SingleMealScreen;
