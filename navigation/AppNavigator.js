import React from 'react';
import { Platform, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

// import screens
import OrderScreen from '../screens/OrderScreen';
import ViewScreen from '../screens/ViewScreen';
import UserScreen from '../screens/UserScreen';

// create nav component stack
const OrderStack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order" component={OrderScreen} />
      <OrderStack.Screen name="View Orders" component={ViewScreen} />
      <OrderStack.Screen name="User" component={UserScreen} />
    </OrderStack.Navigator>
  );
};

// create tab stack

const OrderTab = createBottomTabNavigator();

const OrderTabNavigator = () => {
  return (
    <OrderTab.Navigator>
      <OrderTab.Screen
        name="Order"
        component={OrderScreen}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        })}
      />
      <OrderTab.Screen
        name="View Orders"
        component={ViewScreen}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-list" size={25} color={color} />;
          },
        })}
      />
      <OrderTab.Screen
        name="User"
        component={UserScreen}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-person" size={25} color={color} />;
          },
        })}
      />
    </OrderTab.Navigator>
  );
};

export default OrderTabNavigator;
