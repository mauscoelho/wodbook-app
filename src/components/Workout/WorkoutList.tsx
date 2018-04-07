import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';

import { WodbookApi } from '../../shared/wodbook.api';
import { WorkoutListRow } from './WorkoutListRow';
import { ListSeparator } from '../ListSeparator';

type WorkoutListProps = {
	navigator: any[];
};

type WorkoutListState = {
	workouts: Workout[];
};

export class WorkoutList extends React.Component<WorkoutListProps, WorkoutListState> {
	constructor(props) {
		super(props);
		this.state = {
			workouts: []
		};
	}

	async componentDidMount() {
		const workouts = await WodbookApi.getWorkouts();
		this.setState({
			workouts
		});
	}

	onPressItem(workout) {
		this.props.navigator.push({
			title: 'Details',
			screen: 'WorkoutDetail',
			passProps: {
				workout
			}
		});
	}

	renderItem({ item }) {
		return (
			<TouchableHighlight
				onPress={() => this.onPressItem(item)}
				underlayColor='#ddd'>
				<WorkoutListRow
					id={item.id}
					onPressItem={this.onPressItem}
					title={item.title}
				/>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<FlatList
				data={this.state.workouts}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(item, _index) => item._id}
				ItemSeparatorComponent={() => <ListSeparator />}
			/>
		);
	}
}
