import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../style';


export class Header extends Component {
    render() {
        return (
            <View style={[ styles.row, styles.header, styles.headerSection]}>
                <View>
                    <Text style={{fontSize:24,}}>Agencija Grupa</Text>
                </View>
                <View>
                    <Image source={{uri: 'http://grupa.co.rs/wp-content/uploads/2013/12/logo-3.png'}} style={{width: 70, height: 70,}} />
                </View>
            </View>
        )
    }
}

export default Header
