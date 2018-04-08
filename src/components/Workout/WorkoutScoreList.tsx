import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';

import { WodbookApi } from '../../shared/wodbook.api';
import { ListSeparator } from '../ListSeparator';
import { WorkoutListScoreRow } from './WorkoutScoreListRow';

type WorkoutScoreListProps = {
	workoutId: string;
};

type WorkoutScoreListState = {
	scores: WorkoutScore[];
};

export class WorkoutScoreList extends React.Component<WorkoutScoreListProps, WorkoutScoreListState> {
	constructor(props) {
		super(props);
		this.state = {
			scores: []
		};
	}

	async componentDidMount() {
		const { workoutId } = this.props;
		const scores = await WodbookApi.getWorkoutScores(workoutId);
		this.setState({
			scores
		});
	}

	onPressItem(score: WorkoutScore) {
		console.log('Score detail page', score);
	}

	renderItem({ item }) {
		return (
			<TouchableHighlight
				onPress={() => this.onPressItem(item)}
				underlayColor='#ddd'>
				<WorkoutListScoreRow
					score={item}
				/>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<FlatList
				data={this.state.scores}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(item, _index) => item._id}
				ItemSeparatorComponent={() => <ListSeparator />}
			/>
		);
	}
}
