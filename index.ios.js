import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text> Hello, Navigation </Text>;
  }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
      title: 'Chat with Ruffeng'
    }
    render() {
      return (
        <View>
          <Text> Chat with Ruffeng!</Text>
        </View>
      );
    }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('navigator', () => SimpleApp);
