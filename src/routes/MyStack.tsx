import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

const screens = {
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailScreen
  }
}

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);