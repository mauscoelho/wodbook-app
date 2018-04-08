import { Navigation } from 'react-native-navigation';

import { App } from '../App';
import { Login } from '../containers/Login';
import { Profile } from '../containers/Profile';
import { MovementList } from '../components/Movement/MovementList';
import { WorkoutList } from '../components/Workout/WorkoutList';
import { WorkoutDetail } from '../components/Workout/WorkoutDetail';
import { WorkoutScoreList } from '../components/Workout/WorkoutScoreList';
import { MovementScoreList } from '../components/Movement/MovementScoreList';

export function registerScreens() {
	Navigation.registerComponent('App', () => App);
	Navigation.registerComponent('Login', () => Login);
	Navigation.registerComponent('Profile', () => Profile);
	Navigation.registerComponent('WorkoutList', () => WorkoutList);
	Navigation.registerComponent('MovementList', () => MovementList);
	Navigation.registerComponent('WorkoutDetail', () => WorkoutDetail);
	Navigation.registerComponent('WorkoutScoreList', () => WorkoutScoreList);
	Navigation.registerComponent('MovementScoreList', () => MovementScoreList);
}
