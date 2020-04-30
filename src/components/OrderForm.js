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

const OrderCard = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelect}>
				<View>
					{/* Top Card Section */}
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.mealData.imageUrl }}
							style={styles.imgBG}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title}>{props.mealData.title}</Text>
							</View>
						</ImageBackground>
					</View>

					{/* Bottom Card Section */}
					<View style={[styles.mealRow, styles.mealDetail]}>
						<Text>${props.mealData.price} </Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#ddd',
		marginBottom: 15,
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
		fontSize: 22,
		color: 'white',
		textAlign: 'center',
	},
});

export default OrderCard;
