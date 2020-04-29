import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  SafeAreaView


} from 'react-native';
import Constants from 'expo-constants';


const OrderCard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        {/* Single Order Card*/}
        <View style={styles.mealItem}>
          <TouchableOpacity onPress={props.onSelect}>
            <View>
              {/* Top Card Section */}
              <View >
                <Text style={styles.title}>Pizza</Text>
              </View>

              {/* Bottom Card Section */}
              <View >
                <Text style={styles.price}>$10.99</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
       
       
      
        
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  price:{
    margin: 10,
    textAlign: 'center',
  },

  mealItem: {
    height: 100,
    width: '90%',
    backgroundColor: '#3332',
    margin: 15,

    borderRadius: 10,
    overflow: 'hidden',
  },
  imgBG: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },

  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    margin: 5,
  },
});

export default OrderCard;
