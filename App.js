import React from 'react';
import MainProgram from './src/MainProgram.js';
import AddCity from './src/components/AddCity.js';
import CityList from './src/components/CityList.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Warning', 'Setting'];

    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>;
    }
    return <MainProgram/>;
  }
}
