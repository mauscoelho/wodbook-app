import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, SafeAreaView, View } from 'react-native';

import { Home } from './components/Home';
import { Login } from './components/Login';
import { AuthService } from './shared/auth.service';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      checkingAuth: true
    };
  }

  async componentDidMount() {
    try {
      const authInfo = await AuthService.getAuthInfo();
      this.setState({
        checkingAuth: false,
        token: authInfo.token
      })
    } catch (err) {
      console.log(err);
    }
  }

  onLogin(token) {
    this.setState({ token });
  }

  render() {
    let view = <ActivityIndicator
      animating={true}
      size='large'
      style={styles.loader} />;

    if (!this.state.checkingAuth) {
      view = <Login onLogin={this.onLogin.bind(this)} />

      if (this.state.token) {
        view = <Home />
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        {view}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
})