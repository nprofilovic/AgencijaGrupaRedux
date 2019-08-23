import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import { stylesArtical } from '../style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';

const { width, height } = Dimensions.get('window');

export class Portfolio extends Component {
    scrollX = new Animated.Value(0);
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={[stylesArtical.flex, stylesArtical.row, stylesArtical.header]}>
                    <TouchableOpacity style={stylesArtical.back} onPress={() => navigation.goBack()}>
                        <FontAwesome name="chevron-left" color={'white'} size={14} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="more-horiz" color={'white'} size={14 * 1.5} />
                    </TouchableOpacity>
                </View>
            ),
            headerTransparent: true,
        }
    }
    render() {
        const { navigation } = this.props;
        const portfolio = navigation.getParam('portfolio');
        console.log(portfolio);
        
        return (
            
                 
            <View style={stylesArtical.flex}>
                <View style={stylesArtical.flex}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
                    >
                         
                         <Image
                                source={{ uri: portfolio.media_image_src }}
                                resizeMode='cover'
                                style={{ width, height: width }}
                                />
                    </ScrollView>
                </View>
                <View style={[stylesArtical.flex, stylesArtical.content]}>
                    <View style={[stylesArtical.flex, stylesArtical.contentHeader]}>
                        <Text style={stylesArtical.title}>{portfolio.title.rendered}</Text>
            
                        <HTML html={portfolio._nectar_portfolio_extra_content} imagesMaxWidth={Dimensions.get('window').width} />
                   
                    </View>
                </View>
            </View>
            
        )
    }
}

export default Portfolio
