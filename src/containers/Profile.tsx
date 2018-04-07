import * as React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
	Image
} from 'react-native';

import { WodbookApi } from '../shared/wodbook.api';
import { Utils } from '../shared/utils';

type ProfileState = {
	user: User | null;
};

export class Profile extends React.Component<{}, ProfileState> {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	async componentDidMount() {
		try {
			const user = await WodbookApi.getUser();
			this.setState({
				user
			});
		} catch (err) {
			console.error(err);
		}
	}

	render() {
		if (!this.state.user) {
			return <ActivityIndicator
				style={styles.loader}
				size='large'
				animating={true} />;
		}

		const { user } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('../../images/profile.png')} style={styles.image} />
					{/* <Image source={{ uri: this.state.user.avatarUrl }} style={styles.image} /> */}
					<Text style={styles.name}>{user.firstName} {user.lastName}</Text>
					<Text style={{ alignSelf: 'center', fontSize: 18 }}>{user.boxName}</Text>
				</View>

				<View style={styles.stats}>
					<Text>{Utils.calculateAge(user.dateOfBirth)} y/o</Text>
					<Text>{user.gender}</Text>
					<Text>{user.height}cm</Text>
					<Text>{user.weight / 1000}kg</Text>
				</View>

				<Text>Feed goes here</Text>
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
		borderBottomColor: '#CED0CE',
		borderBottomWidth: StyleSheet.hairlineWidth,
		paddingBottom: 20,
		marginBottom: 20
	},
	stats: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomColor: '#CED0CE',
		borderBottomWidth: StyleSheet.hairlineWidth,
		paddingBottom: 20,
		marginBottom: 20
	},
	name: {
		fontSize: 20,
		fontWeight: '700',
		alignSelf: 'center'
	},
	image: {
		height: 150,
		width: 150,
		borderRadius: 75,
		marginBottom: 10,
		alignSelf: 'center'
	},
	loader: {
		flex: 1,
		justifyContent: 'center'
	},
});
