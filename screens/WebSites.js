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
    
    fetchPortfolio = async () => {
        this.setState({ loading: true});
        const { page, portfolio } = this.state;
        const url = `http://grupa.co.rs/wp-json/wp/v2/portfolio?page=${page}&per_page=7&project-type=20`
        await fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState(state => ({
            portfolio: state.page === 1 ? res : [...state.portfolio, ...res],
            refreshing: false,
            loading: false
          }));
        
        })
        .catch(error => {
          console.log(error);
          this.setState({ loading: false, refreshing: false });
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
        this.setState(state => ({ page: state.page + 1}), () => this.fetchPortfolio())
      }

    renderWebsites = (item, index) => {
        Moment.locale('en');
        
        return(
            
                <Card style={{marginBottom: 15, margin:15}} onPress={() => this.props.navigation.navigate('Portfolio', {portfolio: item})}>
                    <Card.Image height={180} imageSource={{uri: item.featured_image_src }} />

                    <View padding-20>
                        <Text text40 color={Colors.dark10}>
                            {item.title.rendered}
                        </Text>
                        <View row>
                            <Text text90 color={'green'}>
                                Web sajt
                            </Text>
                            <Text text90> | {Moment(item.data).format('d MMM Y')}</Text>
                        </View>
                        <Text text70 color={Colors.dark10}></Text>
                    </View>
                </Card>
            
            
        )
    }
    
    renderFooter = () => {
        
        return(
            this.state.loading ? 
            <View style={{paddingVertical:20, borderTopWidth: 1, borderTopColor: "#CED0CE"}}>
                <ActivityIndicator animating size="large" />
            </View> : null
        )
    }
    render() {
        const { navigation } = this.props;
        const websites = navigation.getParam('websites');
        const fetchData = navigation.getParam('fetchData')
        console.log(fetchData);
        
        
        return (
            
            <ScrollView>
            {this.state.loading ? 
                <View style={{flex:1, flexDirection: 'column', alignItems:'center',  justifyContent: 'space-around' }}>
                    <ActivityIndicator size={'large'} color={'#000000'} /> 
                    <Text style={{marginTop:20}}>Molimo sacekajte sadrzaj se ucitava</Text>
                </View>
            :
                <View style={[styles.column ]}>
                    <FlatList 
                        data={this.state.portfolio}
                        style={[styles.shadow, {overflow: 'visible'}]}
                        keyExtractor={(item, index) => `${item.id}` }
                        renderItem={({ item }) => this.renderWebsites(item)}
                        ListFooterComponent={() => this.renderFooter()}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                        onEndReached={() => this.handleLoadMore()}
                        onEndReachedThreshold={0}
                        
                    />
                </View>
            }
            </ScrollView>
            
        )
    }
}

export default WebSites
