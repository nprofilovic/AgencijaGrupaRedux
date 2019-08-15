import { createStackNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation'
import Home from '../screens/Home';
import Article from '../screens/Article';


const StackNavigator = createStackNavigator({
    Home,
    Article
})

export const AppContainer = createAppContainer(StackNavigator);