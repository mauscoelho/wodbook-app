import * as React from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

type MovementListRowProps = {
	score: MovementScore;
};

export class MovementListScoreRow extends React.PureComponent<MovementListRowProps, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const { score } = this.props;
		return (
			<Text style={styles.item}>
				{score.sets} x {score.score} ({new Date(score.createdAt).toDateString()})
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
