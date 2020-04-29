import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

const SingleMealCard = (props) => {

    
  return (

    <View style={styles.gridItems}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.title}>$ 10.99</Text>
        </View>
      </TouchableOpacity>
    </View>

    // <View>
    //   <TouchableOpacity
        
    //     onPress={props.onSelect} // pass data on a click
    //   >
    //     <View style={styles.mealItem}>
    //       <Text style={styles.title}>
    //         {props.mealData.params.title} hi 
    //       </Text>
    //     </View>
    //   </TouchableOpacity>
    // </View>
   
  );


};

const styles = StyleSheet.create({

    gridItems: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#3332',
    
        // overflow: 'hidden',
      },
      container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      title: {
        fontSize: 20,
        textAlign: 'right',
        margin: 3,
      },
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   scrollView: {
//     backgroundColor: 'white',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
//   price: {
//     margin: 10,
//     textAlign: 'center',
//   },

//   mealItem: {
//     height: 100,
//     width: '90%',
//     backgroundColor: '#3332',
//     margin: 15,

//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   imgBG: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'flex-end',
//   },

//   titleContainer: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     paddingVertical: 5,
//     paddingHorizontal: 12,
//   },
//   title: {
//     fontSize: 25,
//     color: 'black',
//     textAlign: 'center',
//     margin: 5,
//   },
});

export default SingleMealCard;
