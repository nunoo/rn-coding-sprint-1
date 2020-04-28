import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ImageBackground,
} from 'react-native';

const OrderForm = (props) => {
  const [selectedValue, setSelectedValue] = useState('order');
  return (
    <View style={styles.screen}>
      <View style={styles.pic}>
        <Text>Food Image Here</Text>
      </View>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Sushi Special" value="sushi" />
        <Picker.Item label="Cheese Pizza" value="pizza" />
        <Picker.Item label="Taco Plate" value="tacos" />
        <Picker.Item label="Falafel Bowl" value="falafel" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={props.onSelect}>
        <Text>order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 13,
    marginTop: 50,
    height: 650,
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
    marginTop: 150,
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
