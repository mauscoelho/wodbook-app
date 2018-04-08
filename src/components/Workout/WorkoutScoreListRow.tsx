import * as React from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

type WorkoutListRowProps = {
	score: WorkoutScore;
};

export class WorkoutListScoreRow extends React.PureComponent<WorkoutListRowProps, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const { score } = this.props;

		return (
			<Text style={styles.item}>
				{score.score} ({new Date(score.createdAt).toDateString()}) - {score.rx ? 'Rx' : 'Scaled'}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	}
});
