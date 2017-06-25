import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
        Hello, Navigation
        </Text>
        <Button
          onPress={() => navigate('Chat', user: 'Ruffeng')}
          title='Chat with ruffeng' />
      </View>
      );
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
  Chat: { screen: ChatScreen}
});

AppRegistry.registerComponent('navigator', () => SimpleApp);
