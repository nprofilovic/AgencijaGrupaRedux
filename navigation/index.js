import { createStackNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation'
import Home from '../screens/Home';
import Article from '../screens/Article';
import Portfolio from '../screens/Portfolio';
import News from '../screens/News';


const StackNavigator = createStackNavigator({
    Home,
    Article,
    Portfolio,
    News,
    
})

export const AppContainer = createAppContainer(StackNavigator);