import * as React from 'react';
import {
	ActivityIndicator,
	TouchableHighlight,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';

import { AuthService } from '../shared/auth.service';

type LoginProps = {
	onLogin: Function;
};

type LoginState = {
	error: Error | null;
	username?: string;
	password?: string;
	showProgress: boolean;
};

export class Login extends React.Component<LoginProps, LoginState> {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			showProgress: false
		};
	}

	render() {
		let errorCtrl = <View />;

		if (this.state.error) {
			errorCtrl = <Text style={styles.error}>
				{this.state.error.message}
			</Text>;

		}

		return (
			<View style={styles.container}>
				<Image style={styles.logo}
					source={require('../../images/myguy.jpg')} />
				<Text style={styles.heading}>Wodbook</Text>
				<TextInput style={styles.input}
					onChangeText={(text) => this.setState({ username: text })}
					placeholder='Username' />
				<TextInput style={styles.input}
					onChangeText={(text) => this.setState({ password: text })}
					placeholder='Password'
					secureTextEntry={true} />
				<TouchableHighlight
					onPress={this.onLoginPressed.bind(this)}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Log in
					</Text>
				</TouchableHighlight>

				{errorCtrl}

				<ActivityIndicator
					style={styles.loader}
					animating={this.state.showProgress}
					size='large' />
			</View>
		);
	}

	async onLoginPressed() {
		this.setState({ showProgress: true });

		try {
			const { username, password } = this.state;
			const data = await AuthService.login(username, password);
			const token = data.token;

			this.setState({ error: null, showProgress: false });

			if (this.props.onLogin) {
				this.props.onLogin(token);
			}
		} catch (err) {
			this.setState({ error: err.message, showProgress: false });
		}
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
		flex: 1,
		padding: 30,
		alignItems: 'center',
	},
	logo: {
		width: 200,
		height: 200
	},
	heading: {
		fontSize: 30,
		marginTop: 10
	},
	input: {
		height: 50,
		marginTop: 10,
		padding: 4,
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: '#ba5555',
		alignSelf: 'stretch'
	},
	button: {
		height: 50,
		backgroundColor: '#ba5555',
		alignSelf: 'stretch',
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center'
	},
	loader: {
		marginTop: 20
	},
	error: {
		color: 'red',
		paddingTop: 10
	}
});
