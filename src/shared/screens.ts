import { Navigation } from 'react-native-navigation';

import { App } from '../App';
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Profile } from '../containers/Profile';
import { MovementList } from '../components/Movement/MovementList';
import { WorkoutList } from '../components/Workout/WorkoutList';
import { WorkoutDetail } from '../components/Workout/WorkoutDetail';
import { MovementDetail } from '../components/Movement/MovementDetail';

export function registerScreens() {
	Navigation.registerComponent('App', () => App);
	Navigation.registerComponent('Home', () => Home);
	Navigation.registerComponent('Login', () => Login);
	Navigation.registerComponent('Profile', () => Profile);
	Navigation.registerComponent('WorkoutList', () => WorkoutList);
	Navigation.registerComponent('WorkoutDetail', () => WorkoutDetail);
	Navigation.registerComponent('MovementList', () => MovementList);
	Navigation.registerComponent('MovementDetail', () => MovementDetail);
}
