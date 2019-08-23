import { createStackNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation'
import Home from '../screens/Home';
import Article from '../screens/Article';
import Portfolio from '../screens/Portfolio';

const StackNavigator = createStackNavigator({
    Home,
    Article,
    Portfolio
})

export const AppContainer = createAppContainer(StackNavigator);