import * as React from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

type MovementListRowProps = {
	id: string;
	title: string;
	onPressItem: Function;
};

export class MovementListRow extends React.PureComponent<MovementListRowProps, {}> {
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
