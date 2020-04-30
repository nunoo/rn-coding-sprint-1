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
						'https://lh3.googleusercontent.com/proxy/pDGaEYpqJmQlCz7ROMGk_kaiBZOzxF4i_I2v69ilmCFsWQvORKQbFATP7joOG-CF08w7-vv4v8CxbFPLyEjiw2VPcfPbNb-ZhjvmW9ToC_wK';
					meal.title = 'the scotts';
					meal.price = '420';
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
