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
import SingleMealScreen from '../screens/SingleMealScreen';

// create nav component stack
const OrderStack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTintColor:
          Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <OrderStack.Screen
        name="Order"
        component={OrderScreen}
        options={{ title: 'nunoo' }}
      />
      <OrderStack.Screen
        name="Single Meal"
        component={SingleMealScreen}
        options={{ title: 'nunoo' }}
      />
      {/* 
      <OrderStack.Screen name="View Orders" component={ViewScreen} />
      <OrderStack.Screen name="User" component={UserScreen} /> */}
    </OrderStack.Navigator>
  );
};

// create tab stack

const OrderTab = createBottomTabNavigator();

const OrderTabNavigator = () => {
  return (
    <OrderTab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFE0FF',
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'black',
      }}
    >
      <OrderTab.Screen
        name="Order"
        component={OrderNavigator}
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
