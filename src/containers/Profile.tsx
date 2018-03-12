import * as React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
	Image
} from 'react-native';

import { WodbookApi } from '../shared/wodbook.api';

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
				<Image source={require('../../images/profile.png')} style={styles.image} />
				{/* <Image source={{ uri: this.state.user.avatarUrl }} style={styles.image} /> */}
				<Text style={{ fontWeight: '700', alignSelf: 'center' }}>{user.firstName} {user.lastName}</Text>
				<Text style={{}}>{user.email}</Text>
				<Text style={{}}>Box: {user.boxName}</Text>
				<Text style={{}}>Born: {new Date(user.dateOfBirth).toLocaleDateString()}</Text>
				<Text style={{}}>{user.gender}</Text>
				<Text style={{}}>Height: {user.height}cm</Text>
				<Text style={{}}>Weight: {user.weight / 1000}kg</Text>
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
