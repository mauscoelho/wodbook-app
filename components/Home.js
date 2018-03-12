import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  TabBarIOS,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import { WorkoutList } from './WorkoutList';
import { MovementList } from './MovementList';
import { Profile } from './Profile';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'profile'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItem
          selected={this.state.selectedTab === 'workouts'}
          title="Workouts"
          iconName="format-list-bulleted"
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
          title="Movements"
          iconName="dumbbell"
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
          title="Profile"
          iconName="account"
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})