import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

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
          onPress={() => navigate('Chat', {user: 'Maria'})}
          title='Chat with ruffeng' />
      </View>
      );
  }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const { state, setParams } = navigation;
      const isInfo = state.params.mode === 'info';
      const { user } = state.params;
      return {
            title: isInfo ? `${user}'s contact info` : ` Chat with ${state.params.user}`,
            headerRight: (
              <Button
              title={isInfo ? 'Done' : `${user}'s info`}
              onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
              />
            ),
      };
    };
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text> Chat with { params.user }</Text>
        </View>
      );
    }
}

class RecentChatsScreen extends React.Component {
  render() {
    return <Text> List of recent chats </Text>;
  }
}


class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          List of all Contacts
        </Text>
        <Button
        onPress={() => navigate('Chat', { user: 'Ruffeng' })}
        title="Chat with Ruffeng" />
      </View>
      );
  }
}
const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats'
};
const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('navigator', () => SimpleApp);
