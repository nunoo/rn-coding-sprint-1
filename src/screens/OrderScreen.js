import React, { useContext } from 'react';
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Picker,
	StatusBar,
} from 'react-native';
import OrderForm from '../components/OrderForm';
import MealContext from '../context/Context';

import { MEALS, CATEGORIES } from '../data/dummy-data';

const OrderScreen = (props) => {
	const { state, changePic } = useContext(MealContext);
	const meals = state.meals;

	const renderItems = (itemData) => {
		return (
			<OrderForm
				mealData={itemData.item}
				onSelect={() => {
					changePic(itemData.item);
					// props.navigation.navigate('Single Meal', {
					//   mealId: itemData.item.id,
					// title: itemData.item.title,
					// price: itemData.item.price,
					// img: itemData.item.imageUrl,
					// });
				}}
			/>
		);
	};

	return <FlatList data={MEALS} renderItem={renderItems} />;
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default OrderScreen;
