import React,{ useState }  from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Picker,
  StatusBar
} from 'react-native';
import OrderForm from '../components/OrderForm';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const OrderScreen = (props) => {
  return (
    <OrderForm onSelect={() => props.navigation.navigate('Single Meal')} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderScreen;
