import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'

export class WebSites extends Component {
    static navigationOptions = {
        header: (
            <Header />  
        )
    }
    render() {
        console.log(this.props);
        
        return (
            <View>
                <Text> Web Sajtovi </Text>
            </View>
        )
    }
}

export default WebSites
