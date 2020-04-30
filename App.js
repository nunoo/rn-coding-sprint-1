import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { MealProvider } from './src/context/Context';

export default function App() {
	return (
		<MealProvider>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</MealProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
