import React, { createContext, useReducer } from 'react';
import { MEALS } from '../data/dummy-data';

const inistialState = {
	meals: MEALS,
	orders: [],
};

const MealContext = createContext();

const mealReducer = (state, action) => {
	switch (action.type) {
		case 'change_pic':
			const updatedMeals = state.meals;
			updatedMeals.forEach((meal) => {
				if (meal.id === action.meal.id) {
					meal.imageUrl =
						'https://i.imgur.com/hqhoCzIg.jpg';
					meal.title = 'the scotts';
					meal.price = 'kid cudi x travis scott';
				}
			});
			return { ...state, meals: updatedMeals };

		default:
			return state;
	}
};

export const MealProvider = ({ children }) => {
	const [state, dispatch] = useReducer(mealReducer, inistialState);

	const changePic = (meal) => {
		dispatch({ type: 'change_pic', meal });
	};

	return (
		<MealContext.Provider value={{ state, changePic }}>
			{children}
		</MealContext.Provider>
	);
};

export default MealContext;
