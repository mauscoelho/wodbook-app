import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { ThemeProvider } from 'react-native-ios-kit';

import { App } from '../App';
import { Login } from '../containers/Login';
import { Profile } from '../containers/Profile';
import { MovementList } from '../components/Movement/MovementList';
import { WorkoutList } from '../components/Workout/WorkoutList';
import { WorkoutDetail } from '../components/Workout/WorkoutDetail';
import { WorkoutScoreList } from '../components/Workout/WorkoutScoreList';
import { MovementScoreList } from '../components/Movement/MovementScoreList';

function register(componentId, Component) {
	const wrappedComponent = () => {
		return (
			<ThemeProvider>
				<Component />
			</ThemeProvider>
		);
	};

	Navigation.registerComponent(componentId, () => wrappedComponent, null, ThemeProvider);
}

export function registerScreens() {
	register('App', App);
	register('Login', Login);
	register('Profile', Profile);
	register('WorkoutList', WorkoutList);
	register('MovementList', MovementList);
	register('WorkoutDetail', WorkoutDetail);
	register('WorkoutScoreList', WorkoutScoreList);
	register('MovementScoreList', MovementScoreList);
}
