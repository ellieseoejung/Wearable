import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import LoginPage from './components/pages/LoginPage';
import SplashPage from './components/pages/SplashPage';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import QuestionPage from './components/pages/QuestionPage';
import store from './reducers/';
const ConnectedRouter = connect()(Router);

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key='splashPage' component={SplashPage} initial={true}></Scene>
    <Scene key='loginPage' component={LoginPage}></Scene>
    <Scene key='homePage' component={HomePage}></Scene>
    <Scene key='registerPage' component={RegisterPage}></Scene>
    <Scene key='questionPage' component={QuestionPage}></Scene>
  </Scene>);

export default class RootComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}