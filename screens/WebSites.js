import React, { Component } from 'react';
import {  FlatList, ScrollView, ActivityIndicator } from 'react-native';
import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; 
import Header from '../components/Header';
import Moment from 'moment';
import { styles } from '../style';


export class WebSites extends Component {
    static navigationOptions = {
        header: (
            <Header />  
        )
    }
    state = {
        loading: false,
        page: 1,
        refreshing: false,
        portfolio: [],
    }
    componentDidMount() {
        
        this.fetchPortfolio()
    }
    
    fetchPortfolio = () => {
        const { page } = this.state;
        const url = `http://grupa.co.rs/wp-json/wp/v2/portfolio?page=${page}&per_page=5&project-type=20`
        this.setState({ loading: true });
        fetch(url)
        .then(res => { 
          return res.json()
          
        })
        .then(res => {
          const arrayData = [...this.state.portfolio, ...res]
          this.setState({
            portfolio: page === 1 ? res : arrayData,
            loading: false,
            refreshing: false
          });
          console.log("Portfolio Posts");
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false });
        });
    }
    
    handleRefresh = () => {
        this.setState(
          {
            page: 1,
            refreshing: true
          },
          () => {
            this.fetchPortfolio();
          }
        );
      };

      handleLoadMore = () => {
        this.setState(
          {
            page: this.state.page + 1
          },
          () => {
            this.fetchPortfolio();
          }
        );
      };

    renderWebsites = (item, index) => {
        Moment.locale('en');
        
        return(
            
                <Card style={{marginBottom: 15, margin:15}} onPress={() => this.props.navigation.navigate('Portfolio', {portfolio: item})}>
                    <Card.Image height={180} imageSource={{uri: item.featured_image_src }} />

                    <View padding-20>
                        <Text text40 color={Colors.dark10}>
                            {item.title.rendered.split('').slice(0, 20)}...
                        </Text>
                        <View row>
                            <Text text90 color={'green'}>
                                Publish
                            </Text>
                            <Text text90> | {Moment(item.data).format('d MMM Y')}</Text>
                        </View>

                        <Text text70 color={Colors.dark10}>
                            
                        </Text>

                       
                    </View>
                </Card>
            
            
        )
    }
    render() {
        const { navigation } = this.props;
        const websites = navigation.getParam('websites');
        console.log(this.state.data);
        
        
        return (
            
            <ScrollView>
            {this.state.loading ? <ActivityIndicator size={'large'} color={'#000000'} /> :
            <View style={[styles.column ]}>
                <FlatList 
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    data={this.state.portfolio}
                    style={[styles.shadow, {overflow: 'visible'}]}
                    keyExtractor={(item, index) => `${item.id}` }
                    renderItem={({ item }) => this.renderWebsites(item)}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={50}
                    
                />
            </View>
            }
            </ScrollView>
            
        )
    }
}

export default WebSites
