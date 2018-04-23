import * as React from 'react';
import {
	FlatList,
	TouchableHighlight
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { WodbookApi } from '../../shared/wodbook.api';
import { WorkoutListRow } from './WorkoutListRow';
import { ListSeparator } from '../ListSeparator';

type WorkoutListProps = {
	navigator: any[];
};

type WorkoutListState = {
	search: string;
	workouts: Workout[];
};

export class WorkoutList extends React.Component<WorkoutListProps, WorkoutListState> {
	search: any;

	constructor(props) {
		super(props);
		this.state = {
			search: '',
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

	onSearch(search) {
		this.setState({ search });
	}

	renderHeader = () => {
		return <SearchBar
			onChange={(search) => this.setState({ search: search.nativeEvent.text })}
			onClear={() => this.setState({ search: '' })}
			containerStyle={{ backgroundColor: 'white' }}
			inputStyle={{ backgroundColor: 'white', fontSize: 15 }}
			value={this.state.search}
			placeholder='Search'
			clearIcon={this.state.search !== ''}
			lightTheme
		/>;
	}

	renderItem({ item }) {
		return (
			<TouchableHighlight
				onPress={() => this.onPressItem(item)}
				underlayColor='#ddd'>
				<WorkoutListRow
					id={item.id}
					title={item.title}
				/>
			</TouchableHighlight>
		);
	}

	filterBySearchTerm(item: Workout) {
		const { search } = this.state;
		return item.title.toLowerCase().includes(search.toLowerCase());
	}

	render() {
		const items = this.state.workouts;
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
