import { createStackNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation'
import Home from '../screens/Home';
import Article from '../screens/Article';
import Portfolio from '../screens/Portfolio';
import News from '../screens/News';
import WebSites from '../screens/WebSites';

const StackNavigator = createStackNavigator({
    Home,
    Article,
    Portfolio,
    News,
    WebSites
    
})

export const AppContainer = createAppContainer(StackNavigator);