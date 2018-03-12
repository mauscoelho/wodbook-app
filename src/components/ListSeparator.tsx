import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export class ListSeparator extends React.Component {
	render() {
		return (
			<View style={styles.separator} />
		);
	}
}

const styles = StyleSheet.create({
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#CED0CE',
	}
});
