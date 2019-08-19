import React, { Component } from 'react'
import { Text, View, FlatList, ImageBackground,Dimensions,ScrollView, Image, TouchableOpacity, Animated, } from 'react-native'
import { datas } from '../data';
import Header from '../components/Header';
import { styles } from '../style';
import axios from 'axios';

const { width, height } = Dimensions.get('screen');

export class Home extends Component {
    
    static navigationOptions = {
        header: (
            <Header />  
        )
    }

    state = {
        datas: []
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        axios.get(`http://grupa.co.rs/wp-json/wp/v2/nectar_slider`)
        .then(res => {
            this.setState({datas: res.data});        
        })
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
                    data={this.state.datas}
                    style={styles.flatlist}
                    keyExtractor={(item, index) => `${item.id}`}
                    renderItem={({ item }) => this.renderArticle(item)}
                />
            </View>
        );
    }
    renderArticle = (item) => {  
        return(
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Article', {article: item})}>
                <ImageBackground 
                    style={[ styles.flex, styles.articleStaff]}
                    imageStyle={{borderRadius: 12}}
                    source={{ uri: item._nectar_slider_image }} 
                    >
                    
                    <View style={[styles.column, styles.articleInfo, styles.shadow]}>
                        <Text style={{fontWeight: '500', fontSize: 18, paddingBottom: 8}}>{item._nectar_slider_heading}</Text>
                        <Text style={{color:'grey', fontSize:12, }}>{item._nectar_slider_caption}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>  
            
        )
    }
    renderRecommended = () => {
        return (
            <View style={[styles.flex, styles.column, styles.recommended]}>
                <View style={[styles.row, styles.recommendedList]}>
                    <Text style={{fontSize: 18}}>Recommended</Text>
                    <Text style={{color: 'grey'}}>More</Text>
                </View>
                <View style={[styles.column, ]}>
                    <FlatList 
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        data={this.props.articles}
                        style={[styles.shadow, {overflow: 'visible'}]}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item }) => this.renderRecommendation(item)}
                    />
                </View>
            </View>
            
        );
    }

    renderRecommendation = (item, index) => {
        const { articles } = this.props;
        const isLastItem = index === articles.length - 1;
        return (
            <View style={[
                 styles.column, styles.recommendation, styles.shadow, 
                index === 0 ? { marginLeft: 36 } : null,
                isLastItem ? { marginRight: 18 } : null,
              ]}>
                <View style={[styles.flex, styles.recommendationHeader]}>
                    <Image style={[ styles.flex,styles.recommendedImage ]} source={{ uri: item.preview }} />
                    <View style={[styles.flex, styles.row, styles.recommendationOptions]}>

                    </View>
                </View>
                
                <View style={[styles.flex, styles.column, styles.shadow, {justifyContent: 'space-evenly',  paddingTop:18 }]}>
                    <Text>{item.title}</Text>

                </View>
            </View>
            
        );
    }
    render() {
        
        return (
            <ScrollView style={[styles.article, styles.flex]}>
                {this.renderArticles()}
                {this.renderRecommended()}
            </ScrollView>
            
        )
    }
} 

Home.defaultProps = {
    articles: datas
}
export default Home
