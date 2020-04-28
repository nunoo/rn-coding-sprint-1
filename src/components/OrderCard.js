import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ImageBackground,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

const OrderCard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mealItem}>
          <TouchableOpacity onPress={props.goToMealDetail}>
            <View>
              {/* Top Card Section */}
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <Text style={styles.title}>Pizza</Text>
              </View>

              {/* Bottom Card Section */}
              <View style={[styles.mealRow, styles.mealDetail]}>
                <Text>Ordered By: Shawn</Text>
                <Text>9:09 pm</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mealItem}>
          <TouchableOpacity onPress={props.goToMealDetail}>
            <View>
              {/* Top Card Section */}
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <Text style={styles.title}>Pizza</Text>
              </View>

              {/* Bottom Card Section */}
              <View style={[styles.mealRow, styles.mealDetail]}>
                <Text>Ordered By: Shawn</Text>
                <Text>9:09 pm</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mealItem}>
          <TouchableOpacity onPress={props.goToMealDetail}>
            <View>
              {/* Top Card Section */}
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <Text style={styles.title}>Pizza</Text>
              </View>

              {/* Bottom Card Section */}
              <View style={[styles.mealRow, styles.mealDetail]}>
                <Text>Ordered By: Shawn</Text>
                <Text>9:09 pm</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mealItem}>
          <TouchableOpacity onPress={props.goToMealDetail}>
            <View>
              {/* Top Card Section */}
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <Text style={styles.title}>Pizza</Text>
              </View>

              {/* Bottom Card Section */}
              <View style={[styles.mealRow, styles.mealDetail]}>
                <Text>Ordered By: Shawn</Text>
                <Text>9:09 pm</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mealItem}>
          <TouchableOpacity onPress={props.goToMealDetail}>
            <View>
              {/* Top Card Section */}
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <Text style={styles.title}>Pizza</Text>
              </View>

              {/* Bottom Card Section */}
              <View style={[styles.mealRow, styles.mealDetail]}>
                <Text>Ordered By: Shawn</Text>
                <Text>9:09 pm</Text>
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

  mealItem: {
    height: 200,
    width: '90%',
    backgroundColor: '#ddd',
    margin: 15,

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
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    margin: 5,
  },
});

export default OrderCard;
