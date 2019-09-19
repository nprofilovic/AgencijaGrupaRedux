import React, { Component } from 'react'
import { FlatList, ImageBackground,Dimensions,ScrollView, TouchableOpacity, ActivityIndicator, } from 'react-native'
import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; 
import Header from '../components/Header';
import Banner from '../components/Banner';
import FotoBanner from '../components/FotoBanner';
import { styles } from '../style';
import { fetchSlider } from '../redux/actions/sliderActions';
import { fetchWebsite } from '../redux/actions/websiteAction';
import { connect } from 'react-redux';
import axios from 'axios';

const { width, height } = Dimensions.get('screen');



class Home extends Component {
    
    static navigationOptions = {
        header: (
            <Header />  
        )
    }

    state = {
        loading: false,
        page: 1,
        refreshing: false,
        
        news: []
    }
    componentDidMount() {
        this.props.fetchSlider();
        this.props.fetchWebsite();
        this.fetchNews();
        
        
      
    }
   
    fetchNews = () => {
        axios.get(`http://grupa.co.rs/wp-json/wp/v2/posts`)
        .then(res => {
            this.setState({news: res.data});
        })
    }
    
    renderArticles = () => {
        
        
        return (
            <View style={[styles.flex, styles.column, styles.articleStaffs]}>
                <FlatList 
                    horizontal
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    data={this.props.slider.sliders.sliderData}
                    style={styles.flatlist}
                    keyExtractor={(item, index) => `${item.id}` }
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
                        source={{ uri: item._nectar_slider_image }} 
                    >
                    <View style={[styles.column, styles.articleInfo, styles.shadow, ]}>
                        <Text style={{fontWeight: '500', fontSize: 18, paddingBottom: 8}}>{item._nectar_slider_heading}</Text>
                        <Text style={{color:'grey', fontSize:12, }}>{item._nectar_slider_caption}</Text>
                    </View>
                </ImageBackground>
                
                
           
            
        )
    }

    

    renderRecommended = () => {
        
        return (
            <View style={[styles.flex, styles.column, styles.recommended]}>
                <View style={[styles.row, styles.recommendedList]}>
                    <Text style={{fontSize: 18}}>Web sajtovi</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WebSites',{websites: this.props.websites.website.websiteData, fetchData: this.props.fetchWebsite()})}>
                        <Text style={{color: 'grey'}}>More</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={[styles.column ]}>
                    <FlatList 
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        data={this.props.websites.website.websiteData}
                        style={[styles.shadow, {overflow: 'visible'}]}
                        keyExtractor={(item, index) => `${item.id}` }
                        renderItem={({ item }) => this.renderRecommendation(item)}
                        
                    />
                </View>
            </View>
            
        );
    }

    renderRecommendation = (item, index) => {
       
               
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Portfolio', {portfolio: item})}>
                <View style={[
                    styles.column, styles.recommendation, styles.shadow, 
                    
                ]}>
                    <View style={[styles.flex, styles.recommendationHeader]}>
                        <Image style={[ styles.flex, styles.recommendedImage ]} source={{ uri: item.featured_image_src }} />
                        <View style={[styles.flex, styles.row, styles.recommendationOptions]}>

                        </View>
                    </View>
                    
                    <View style={[styles.flex, styles.column, styles.shadow, {justifyContent: 'space-evenly',  paddingTop:18 }]}>
                        <Text>{item.title.rendered.split('').slice(0, 20)}...</Text>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderNews = () => {
        return (
            <View style={[styles.flex, styles.column, styles.recommended]}>
                <View style={[styles.row, styles.recommendedList]}>
                    <Text style={{fontSize: 18}}>Vesti</Text>
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
                        data={this.state.news}
                        style={[styles.shadow, {overflow: 'visible'}]}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item }) => this.renderNewses(item)}
                    />
                </View>
            </View>
            
        );
    }

    renderNewses = (item, index) => {
        const { news } = this.state;
        const isLastItem = index === news.length - 1;
        
        return (
            
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('News', {news: item})}>
                <View style={[
                    styles.column, styles.recommendation, styles.shadow, 
                    index === 0 ? { marginLeft: 36 } : null,
                    isLastItem ? { marginRight: 18 } : null,
                ]}>
                    <View style={[styles.flex, styles.recommendationHeader]}>
                        <Image style={[ styles.flex, styles.recommendedImage ]} source={{ uri: item.featured_image_src }} />
                        <View style={[styles.flex, styles.row, styles.recommendationOptions]}>

                        </View>
                    </View>
                    
                    <View style={[styles.flex, styles.column, styles.shadow, {justifyContent: 'space-evenly',  paddingTop:18 }]}>
                        <Text>{item.title.rendered.split('').slice(0, 20)}...</Text>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
       
        
        return (
            <ScrollView style={[styles.article, styles.flex]}>
                {this.state.loading ? <ActivityIndicator size={'large'} color="#000000" /> : this.renderArticles()}
                <View style={styles.fotobanner}>
                    <FotoBanner />
                </View>
                
                {this.state.loading ? <ActivityIndicator size={'large'} color="#000000" style = {[styles.flex,styles.row, {paddingTop:110, margin:35}]} /> : this.renderRecommended()}
                <Banner 
                    image={'http://grupa.co.rs/wp-content/uploads/2019/08/social_networks.png'}
                    headerText={'Želite da se oglašavate na internetu?'}
                    bodyText={'Tu smo da vam pomognemo!'}
                    height={200}
                />
                {this.renderNews()}
                
            </ScrollView>
            
        )
    }
} 

const mapStateToProps = (state) => {    
       
    return {
        slider: state,
        websites: state
    }
}

export default connect(mapStateToProps, {fetchSlider, fetchWebsite})(Home)