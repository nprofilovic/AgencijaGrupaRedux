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
        const url = `http://grupa.co.rs/wp-json/wp/v2/portfolio?page=${page}&per_page=2&project-type=18`
        await fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            portfolio: this.state.page === 1 ? res : [...this.state.portfolio, ...res],
            refreshing: false,
            loading: false
          });
        
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
        this.setState({ page: this.state.page + 1}, () => this.fetchPortfolio())
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
            <View style={{paddingVertical:20, borderTopWidth: 1, borderTopColor: "#CED0CE"}}>
                <Button
                        backgroundColor='#FB3C62'
                        label='Get More'
                        borderRadius={7}
                        style={{height: 45, }}
                        onPress={() => this.handleLoadMore()}
                >
                    { this.state.loading ? ( <ActivityIndicator animating size="large"  /> ): null }
                </Button>
                
            </View> 
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
                        style={[styles.shadow,]}
                        keyExtractor={(item, index) => `${item.id}` }
                        renderItem={({ item }) => this.renderWebsites(item)}
                        ListFooterComponent={() => this.renderFooter()}
                        
                        
                        
                    />
                    
                </View>
            }
            </ScrollView>
            
        )
    }
}

export default WebSites
