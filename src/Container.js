import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Details from './Details';

const AppNavigator = createStackNavigator(
  {
    home: {
      screen: Home,
    },
    details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'details',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
