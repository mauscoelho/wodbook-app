import * as React from 'react';
import {
	Button,
	View,
	Text,
	StyleSheet
} from 'react-native';
import { Navigator } from 'react-native-navigation';

type WorkoutDetailProps = {
	navigator: Navigator;
	workout: Workout;
};

export class WorkoutDetail extends React.Component<WorkoutDetailProps, {}> {
	constructor(props) {
		super(props);
	}

	viewScores(workoutId: string) {
		this.props.navigator.push({
			title: 'Scores',
			screen: 'WorkoutScoreList',
			passProps: {
				workoutId
			}
		});
	}

	render() {
		const { workout } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>{workout.title}</Text>
					<Text style={styles.headerText}>For {workout.measurement}</Text>
				</View>

				<Text style={styles.description}>{workout.description}</Text>

				<Button
					onPress={() => this.viewScores(workout._id)}
					title='Scores'
					accessibilityLabel='View scores for this workout'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 20

	},
	headerText: {
		fontWeight: '700',
		fontSize: 20
	},
	description: {
		fontSize: 16
	}
});
