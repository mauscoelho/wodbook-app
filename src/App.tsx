import * as React from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	SafeAreaView
} from 'react-native';

import { Home } from './containers/Home';
import { Login } from './containers/Login';
import { AuthService } from './shared/auth.service';

type AppState = {
	token?: string;
	checkingAuth: boolean;
};

export class App extends React.Component<{}, AppState> {
	constructor(props) {
		super(props);
		this.state = {
			checkingAuth: true
		};
	}

	async componentDidMount() {
		try {
			const authInfo = await AuthService.getAuthInfo();
			this.setState({
				checkingAuth: false,
				token: authInfo.token
			});
		} catch (err) {
			console.log(err);
		}
	}

	onLogin(token) {
		this.setState({ token });
	}

	render() {
		let view = <ActivityIndicator
			animating={true}
			size='large'
			style={styles.loader} />;

		if (!this.state.checkingAuth) {
			view = <Login onLogin={this.onLogin.bind(this)} />;

			if (this.state.token) {
				view = <Home />;
			}
		}

		return (
			<SafeAreaView style={styles.container}>
				{view}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	},
	loader: {
		flex: 1,
		justifyContent: 'center'
	}
});
