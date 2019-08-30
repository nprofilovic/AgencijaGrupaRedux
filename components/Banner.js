import React from 'react';
import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; 

const Banner = () => {
    return (
        <View>
            <View column>
                <Card
                    height={120}
                    flex
                    marginV-20
                    
                    activeOpacity={1}
                    marginR-20
                >
                    <Card.Image height={'100%'} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/01/barbosa-full-16.jpg'}} />
                </Card>
            </View>
                <Card row height={160} style={{marginBottom: 15}} onPress={() => {}} >
                    <Card.Image width={115} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/01/barbosa-full-16.jpg' }} />
                    <View padding-20 flex>
                        <Text text70 dark10>
                            Želite da se oglašavate na internetu?
                        </Text>
                        <Text text80 dark10>
                        Želite da reklmu na Facebooku, Instagramu, Googlu i YouTube ali ne znate kako?
                        </Text>

                        <Text text90 dark50>
                            Tu smo da vam pomognemo.
                        </Text>
                    </View>
                </Card>

                <Card row height={160} style={{marginBottom: 15}} onPress={() => {}} br10>
                    <View padding-20 flex>
                        
                        <Text text80 dark10>
                        Želite da reklmu na Facebooku, Instagramu, Googlu i YouTube ali ne znate kako?
                        </Text>

                        <Text text90 dark50>
                        Tu smo da vam pomognemo.
                        </Text>
                    </View>
                    <Card.Image width={115} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2015/02/home_slideshow_slide-1-2-3.png' }} />
                </Card>

                <Card style={{marginBottom: 15}} onPress={() => {}}>
                    <View padding-20>
                        <Text text70 dark10>
                        You’re Invited!
                        </Text>

                        <Text text90 dark50>
                        join now
                        </Text>
                    </View>
                    <Card.Image height={120} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/01/barbosa-full-16.jpg' }} />
                </Card>
        </View>
    );
}

export default Banner;