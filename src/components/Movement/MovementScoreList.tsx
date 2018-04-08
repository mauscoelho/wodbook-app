import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';

import { WodbookApi } from '../../shared/wodbook.api';
import { ListSeparator } from '../ListSeparator';
import { MovementListScoreRow } from './MovementScoreListRow';

type MovementScoreListProps = {
	movementId: string;
};

type MovementScoreListState = {
	scores: MovementScore[];
};

export class MovementScoreList extends React.Component<MovementScoreListProps, MovementScoreListState> {
	constructor(props) {
		super(props);
		this.state = {
			scores: []
		};
	}

	async componentDidMount() {
		const { movementId } = this.props;
		const scores = await WodbookApi.getMovementScores(movementId);
		this.setState({
			scores
		});
	}

	renderItem({ item }) {
		return (
			<TouchableHighlight
				underlayColor='#ddd'>
				<MovementListScoreRow
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
