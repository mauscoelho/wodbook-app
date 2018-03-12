import * as React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

type WorkoutDetailProps = {
	workout: Workout;
};

export class WorkoutDetail extends React.Component<WorkoutDetailProps, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const { workout } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>{workout.title}</Text>
					<Text style={styles.headerText}>For: {workout.measurement}</Text>
				</View>

				<Text style={styles.description}>{workout.description}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 60, // for nav bar
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
