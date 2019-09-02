import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Constants, View, Text, Carousel, Card} from 'react-native-ui-lib'; // eslint-disable-line


const INITIAL_PAGE = 0;
const WIDTH = Constants.screenWidth - 5;

class FotoBanner extends Component {
  state = {
    currentPage: INITIAL_PAGE
  };

  onChangePage(index) {
    this.setState({currentPage: index});
  }

  onPagePress = (index) => {
    this.carousel.goToPage(index, true);
  }

  render() {
    return (
      <View flex >
        <View padding-20 flex>
            <Text text80 dark10>
                Fotografija kao dobar kontent!
            </Text>

            <Text text90 dark50>
                Jedan od najboljih alata za komunikaciju je fotografija. Za visok kvalitet fotografije potrebno je nekoliko elemenata koje vam pružamo!
            </Text>
        </View>
        <Carousel 
          migrate 
          ref={r => this.carousel = r}
          // loop 
          onChangePage={(index => this.onChangePage(index))} 
          pageWidth={WIDTH}
          // itemSpacings={20}
          // initialPage={INITIAL_PAGE}
          containerStyle={{height: 200 /* , flex: 1 */, backgroundColor:'white' }}
          pageControlPosition={'under'}
          pageControlProps={{onPagePress: this.onPagePress}}
          // showCounter
        >
          
            <Card style={{marginLeft: 15, marginRight:10 }}>
                <Card.Image height={200}  imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/barbosa-7353.jpg' }} />
            </Card>
          
            <Card style={{marginBottom: 15, marginRight:10 }}>
                <Card.Image height={200} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/barbosa-7231.jpg' }} />
            </Card>

            <Card style={{marginBottom: 15, marginRight:10 }}>
                <Card.Image height={200} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/IMG_6859.jpg' }} />
            </Card>

            <Card style={{marginBottom: 15, marginRight:10 }}>
                <Card.Image height={200} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/IMG_6561.jpg' }} />
            </Card>

            <Card style={{marginBottom: 15, marginRight:10 }}>
                <Card.Image height={200} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/IMG_5918.jpg' }} />
            </Card>

           

            <Card style={{marginBottom: 15, marginRight:10 }}>
                <Card.Image height={200} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/Bros-Jeans-fashion-10@.jpg' }} />
            </Card>

            <Card style={{marginBottom: 15, marginRight:10 }}>
                <Card.Image height={200} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/02/bros-jeans-2.jpg' }} />
            </Card>
        </Carousel>
        
        
      </View>
    );
  }
}

const Page = ({children, ...others}) => {
  return (
    <View {...others} style={styles.page}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4
  }
});

export default FotoBanner;