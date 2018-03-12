import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';

import { WodbookApi } from '../../shared/wodbook.api';
import { MovementListRow } from './MovementListRow';
import { ListSeparator } from '../ListSeparator';
import { MovementDetail } from './MovementDetail';

type MovementListProps = {
	navigator: any[];
};

type MovementListState = {
	movements: Movement[];
};

export class MovementList extends React.Component<MovementListProps, MovementListState> {
	constructor(props) {
		super(props);
		this.state = {
			movements: []
		};
	}

	async componentDidMount() {
		const movements = await WodbookApi.getMovements();
		this.setState({
			movements
		});
	}

	onPressItem(movement) {
		this.props.navigator.push({
			title: 'Details',
			component: MovementDetail,
			passProps: {
				movement
			}
		});
	}

	renderItem({ item }) {
		return (
			<TouchableHighlight
				onPress={() => this.onPressItem(item)}
				underlayColor='#ddd'>
				<MovementListRow
					id={item.id}
					onPressItem={this.onPressItem}
					title={item.name}
				/>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<FlatList
				data={this.state.movements}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(item, _index) => item._id}
				ItemSeparatorComponent={() => <ListSeparator />}
			/>
		);
	}
}