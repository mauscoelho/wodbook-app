import * as React from 'react';
import {
	Text,
	StyleSheet
} from 'react-native';

export class ItemRow extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	_onPress = () => {
		this.props.onPressItem(this.props.id);
	};

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
})
