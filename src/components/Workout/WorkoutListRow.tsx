import * as React from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

type WorkoutListRowProps = {
	id: string;
	title: string;
	onPressItem: Function;
};

export class WorkoutListRow extends React.PureComponent<WorkoutListRowProps, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text style={styles.item}>
				{this.props.title}
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
