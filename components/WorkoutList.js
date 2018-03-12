import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';

import { WodbookApi } from '../shared/wodbook.api';
import { ItemRow } from './ItemRow';
import { ListSeparator } from './ListSeparator';
import { WorkoutDetail } from './WorkoutDetail';

export class WorkoutList extends React.Component {
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
			component: WorkoutDetail,
			passProps: {
				workout
			}
		})
	};

	renderItem({ item }) {
		return (
			<TouchableHighlight
				onPress={() => this.onPressItem(item)}
				underlayColor='#ddd'>
				<ItemRow
					id={item.id}
					onPressItem={this.onPressItem}
					title={item.title}
				/>
			</TouchableHighlight>
		);
	};

	render() {
		return (
			<FlatList
				data={this.state.workouts}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(item, index) => item._id}
				ItemSeparatorComponent={() => <ListSeparator />}
			/>
		);
	}
}
