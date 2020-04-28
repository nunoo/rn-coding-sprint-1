import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ImageBackground,
  Button,
} from 'react-native';

const OrderForm = (props) => {
  const [selectedValue, setSelectedValue] = useState('order');
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.button}
        title="go to meal"
        onPress={props.onSelect}
      >
        <Text>go to meal</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 13,
    // marginTop: 50,
    height: 550,
    width: 350,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#3334',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  button: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderRadius: 10,
  },
  pic: {
    alignItems: 'center',
    margin: 13,
    height: 300,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default OrderForm;
