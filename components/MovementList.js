import * as React from 'react';
import {
	FlatList,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

import { WodbookApi } from '../shared/wodbook.api';
import { ItemRow } from './ItemRow';
import { ListSeparator } from './ListSeparator';
import { MovementDetail } from './MovementDetail';

export class MovementList extends React.Component {
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
					title={item.name}
				/>
			</TouchableHighlight>
		);
	};

	render() {
		return (
			<FlatList
				data={this.state.movements}
				renderItem={this.renderItem.bind(this)}
				keyExtractor={(item, index) => item._id}
				ItemSeparatorComponent={() => <ListSeparator />}
			/>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	}
})
