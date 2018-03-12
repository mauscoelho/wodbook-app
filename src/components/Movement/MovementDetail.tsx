import * as React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

type MovementDetailProps = {
	movement: Movement;
};

export class MovementDetail extends React.Component<MovementDetailProps, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		const { movement } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>{movement.name}</Text>
					<Text style={styles.headerText}>{movement.measurement}</Text>
				</View>

				{/* List of records here */}
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
