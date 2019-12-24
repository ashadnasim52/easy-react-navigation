import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
          }}>
          {' '}
          Home screens Yo
        </Text>
        <Text>
          Item Id :
          {JSON.stringify(this.props.navigation.getParam('itemId', 4000))}
        </Text>
        <Text>
          url is{' '}
          {JSON.stringify(this.props.navigation.getParam('url', 'nothing'))}
        </Text>
        <Button
          title="Go To Details"
          onPress={() => this.props.navigation.navigate('details')}
        />
        <Button
          title="Go Home Again..."
          onPress={() => this.props.navigation.push('home')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default Home;
