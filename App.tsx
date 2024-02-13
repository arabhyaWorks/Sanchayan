import React from 'react';
import NavCont from './source/Navigators/NavCont';
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return <NavCont />;
  }
}
