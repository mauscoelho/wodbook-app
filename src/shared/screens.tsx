import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { App } from '../App';
import { Login } from '../containers/Login';
import { Profile } from '../containers/Profile';
import { MovementList } from '../components/Movement/MovementList';
import { WorkoutList } from '../components/Workout/WorkoutList';
import { WorkoutDetail } from '../components/Workout/WorkoutDetail';
import { WorkoutScoreList } from '../components/Workout/WorkoutScoreList';
import { MovementScoreList } from '../components/Movement/MovementScoreList';

/**
 * When there comes a reason to do anything that
 * requires a global wrap, it can be plugged in here.
 *
 * @param componentId Unique Id of the screen to register
 * @param Component The component to display for the screenId
 */
function register(componentId, Component) {
	const wrappedComponent = (props) => {
		return (
			<Component {...props} />
		);
	};

	Navigation.registerComponent(componentId, () => wrappedComponent);
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
