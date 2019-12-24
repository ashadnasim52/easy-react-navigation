import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export class Details extends Component {
  state = {
    count: 0,
  };
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Details Screen',
      headerRight: () => (
        <Button
          title="Increase Count"
          onPress={navigation.getParam('increase')}
        />
      ),
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({increase: this.increaseCount});
  }
  increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}>
        <Text
          style={{
            fontSize: 35,
            color: 'blue',
          }}>
          {' '}
          Details screen{' '}
        </Text>
        <Text
          style={{
            fontSize: 35,
            color: 'blue',
          }}>
          Count is :{this.state.count}
        </Text>
        <Button
          style={{
            padding: 15,
            margin: 10,
          }}
          title="Go To Home"
          onPress={() => {
            this.props.navigation.navigate('home', {
              itemId: 8080,
              url: 'http://192.168.43.64:8081',
            });
          }}
        />
      </View>
    );
  }
}

export default Details;
