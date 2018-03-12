import * as React from 'react';
import {
	TabBarIOS,
	NavigatorIOS
} from 'react-native';
import * as Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { WorkoutList } from '../components/Workout/WorkoutList';
import { MovementList } from '../components/Movement/MovementList';
import { Profile } from './Profile';

type HomeState = {
	selectedTab: string;
};

export class Home extends React.Component<{}, HomeState> {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'profile'
		};
	}

	render() {
		return (
			<TabBarIOS>
				<Icon.TabBarItem
					selected={this.state.selectedTab === 'workouts'}
					title='Workouts'
					iconName='format-list-bulleted'
					onPress={() => {
						this.setState({
							selectedTab: 'workouts',
						});
					}}>

					<NavigatorIOS
						initialRoute={{
							component: WorkoutList,
							title: 'Workouts',
							passProps: { workouts: [] },
						}}
						style={{ flex: 1 }}
					/>
				</Icon.TabBarItem>
				<Icon.TabBarItem
					selected={this.state.selectedTab === 'movements'}
					title='Movements'
					iconName='dumbbell'
					onPress={() => {
						this.setState({
							selectedTab: 'movements',
						});
					}}>

					<NavigatorIOS
						initialRoute={{
							component: MovementList,
							title: 'Movements'
						}}
						style={{ flex: 1 }}
					/>
				</Icon.TabBarItem>
				<Icon.TabBarItem
					selected={this.state.selectedTab === 'profile'}
					title='Profile'
					iconName='account'
					onPress={() => {
						this.setState({
							selectedTab: 'profile',
						});
					}}>

					<NavigatorIOS
						initialRoute={{
							component: Profile,
							title: 'Profile'
						}}
						style={{ flex: 1 }}
					/>
				</Icon.TabBarItem>
			</TabBarIOS>
		);
	}
}
