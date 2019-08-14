import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Animated, Dimensions, SafeAreaView } from 'react-native'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height

const images = [
    {id: 1, src: require('../assets/image_1.jpg')},
    {id: 2, src: require('../assets/image_2.jpg')},
    {id: 3, src: require('../assets/image_3.jpg')},
    {id: 4, src: require('../assets/image_4.jpg')},
]

export class Home extends Component {

    componentWillMount() {
        this.allImages = {}
    }
    
    openImage = (index) => {
            
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {images.map((image, index) => {
                        return (
                            <TouchableWithoutFeedback key={image.id} onPress={()=>this.openImage(index)}>
                                <Animated.View style={styles.animatedImage}>
                                <Image style={styles.image} ref={(image) => (this.allImages[index] = image)} source={image.src} />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            
                        )
                    })}
                </ScrollView>
            </SafeAreaView>
            
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animatedImage: {
        height: SCREEN_HEIGHT - 150,
        width: SCREEN_WIDTH,
        padding: 15
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode:'cover',
        borderRadius: 20
    }
})
export default Home
