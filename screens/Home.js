import React, { Component } from 'react'
import { Text, View, FlatList, ImageBackground, Image, TouchableWithoutFeedback, Animated, } from 'react-native'
import { datas } from '../data';
import Header from '../components/Header';
import { styles } from '../style';


export class Home extends Component {
    
    static navigationOptions = {
        header: (
            <Header />  
        )
    }
    renderArticles = () => {
        return (
            <View style={[styles.flex, styles.column, styles.articleStaffs]}>
                <FlatList 
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    data={this.props.articles}
                    style={styles.flatlist}
                    keyExtractor={(item, index) => `${item.id}`}
                    renderItem={({ item }) => this.renderArticle(item)}
                />
            </View>
        );
    }
    renderArticle = (item) => {  
        return(  
            <ImageBackground 
                style={[ styles.flex, styles.articleStaff]}
                imageStyle={{borderRadius: 12}}
                source={{ uri: item.preview }} 
                >
                
                <View style={[styles.column, styles.articleInfo, styles.shadow]}>
                    <Text style={{fontWeight: '500', fontSize: 18, paddingBottom: 8}}>{item.title}</Text>
                    <Text style={{color:'grey', fontSize:12, }}>{item.description}</Text>
                </View>
            </ImageBackground>
        )
    }
    renderRecommended = () => {
        return (
            <View style={[styles.flex, styles.column, styles.recommended, {zIndex:1}]}>
                <Text>Recommended</Text>
            </View>
            
        );
    }
    render() {
        console.log(this.renderArticle);
        
        return (
            <View style={[styles.article, styles.flex]}>
                {this.renderArticles()}
                {this.renderRecommended()}
            </View>
            
        )
    }
} 

Home.defaultProps = {
    articles: datas
}
export default Home
