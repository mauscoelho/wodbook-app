import * as React from 'react';
import {
	// ActivityIndicator,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { iconsLoaded, iconsMap } from './shared/app.icons';
// import { AuthService } from './shared/auth.service';

type AppState = {
	token?: string;
	checkingAuth: boolean;
};

export class App extends React.Component<{}, AppState> {
	constructor(props?) {
		super(props);
		this.state = {
			checkingAuth: true
		};
		iconsLoaded().then(() => {
			this.startApp();
		});
	}

	// async componentDidMount() {
	// 	try {
	// 		const authInfo = await AuthService.getAuthInfo();
	// 		this.setState({
	// 			checkingAuth: false,
	// 			token: authInfo.token
	// 		});
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	onLogin(token) {
		this.setState({ token });
	}

	// render() {
	// 	let view = <ActivityIndicator
	// 		animating={true}
	// 		size='large'
	// 		style={styles.loader} />;

	// 	if (!this.state.checkingAuth) {
	// 		view = <Login onLogin={this.onLogin.bind(this)} />;

	// 		if (this.state.token) {
	// 			view = <Home />;
	// 		}
	// 	}

	// 	return (
	// 		<SafeAreaView style={styles.container}>
	// 			{view}
	// 		</SafeAreaView>
	// 	);
	// }

	startApp() {
		if (this.state.token) {
			this.loginView();
		} else {
			this.homeView();
		}
	}

	private loginView() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'Login',
				title: 'Login'
			}
		});
	}

	private homeView() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Profile',
					screen: 'Profile',
					title: 'Profile',
					icon: iconsMap['ios-person']
				},
				{
					label: 'Workouts',
					screen: 'WorkoutList',
					title: 'Workouts',
					icon: iconsMap['format-list-bulleted']
				},
				{
					label: 'Movements',
					screen: 'MovementList',
					title: 'Movements',
					icon: iconsMap['dumbbell']
				}
			],
			appStyle: {
				orientation: 'portrait',
			}
		});
	}
}
