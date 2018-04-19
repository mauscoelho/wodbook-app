import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';
import { Navigator } from 'react-native-navigation';
import { SearchBar } from 'react-native-ios-kit';

import { WodbookApi } from '../../shared/wodbook.api';
import { MovementListRow } from './MovementListRow';
import { ListSeparator } from '../ListSeparator';

type MovementListProps = {
	navigator: Navigator;
};

type MovementListState = {
	search: string;
	movements: Movement[];
};

export class MovementList extends React.Component<MovementListProps, MovementListState> {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			movements: []
		};
	}

	async componentDidMount() {
		const movements = await WodbookApi.getMovements();
		this.setState({
			movements
		});
	}

	onPressItem(movementId: string) {
		this.props.navigator.push({
			title: 'Scores',
			screen: 'MovementScoreList',
			passProps: {
				movementId
			}
		});
	}

	renderHeader = () => {
		return <SearchBar
			value={this.state.search}
			onValueChange={(search) => this.setState({ search })}
			withCancel
			animated
		/>;
	}

	renderItem({ item }) {
		return (
			<TouchableHighlight
				onPress={() => this.onPressItem(item._id)}
				underlayColor='#ddd'>
				<MovementListRow
					id={item.id}
					title={item.name}
				/>
			</TouchableHighlight>
		);
	}

	filterBySearchTerm(item: Movement) {
		const { search } = this.state;
		return item.name.toLowerCase().includes(search.toLowerCase());
	}

	render() {
		const items = this.state.movements;
		const filteredList = this.state.search ? items.filter(this.filterBySearchTerm.bind(this)) : items;
		return (
			<FlatList
				data={filteredList}
				renderItem={this.renderItem.bind(this)}
				ListHeaderComponent={this.renderHeader}
				keyExtractor={(item, _index) => item._id}
				ItemSeparatorComponent={() => <ListSeparator />}
			/>
		);
	}
}
