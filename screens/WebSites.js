import React, { Component } from 'react';
import {  FlatList, ScrollView, ActivityIndicator } from 'react-native';
import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; 
import Header from '../components/Header';
import Moment from 'moment';
import { styles } from '../style';
import { fetchWebsite } from '../redux/actions/websiteAction';
import { connect } from 'react-redux';

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
        this.props.fetchWebsite();
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
        console.log(this.props.websites.website);
        
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
                        onPress={() => console.log('Pressd')}
                >
                    { this.state.loading ? ( <ActivityIndicator animating size="large"  /> ): null }
                </Button>
                
            </View> 
        )
    }
    render() {
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
                        data={this.props.websites.website.websiteData}
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

const mapStateToProps = (state) => {
        
    return {
        websites: state
    }
}
export default connect(mapStateToProps, {fetchWebsite})(WebSites)