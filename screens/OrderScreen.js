import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Picker,
} from 'react-native';
import OrderForm from '../components/OrderForm';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const OrderScreen = (props) => {
  return <OrderForm />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderScreen;
