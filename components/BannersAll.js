import React from 'react';
import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; 

const BannersAll = () => {
    return (
        <View>
            //* Banner 1
            <Card row height={160} style={{marginBottom: 15, margin:15}} onPress={() => {}} >
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
            //* Banner 2
            <Card row height={160} style={{marginBottom: 15, margin:15}} onPress={() => {}} br10>
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
            //* Banner 3
            <Card style={{marginBottom: 15, margin:15}} onPress={() => {}}>
                <View padding-20>
                    <Text text70 dark10>
                    Želite da reklmu na Facebooku, Instagramu, Googlu i YouTube ali ne znate kako?
                    </Text>

                    <Text text90 dark50>
                        Tu smo da vam pomognemo
                    </Text>
                </View>
                <Card.Image height={120} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2019/08/social_networks.png' }} />
            </Card>
            //* Banner 4
            <Card style={{marginBottom: 15, margin:15}} onPress={() => console.log('press on a card')}>
                <Card.Image height={160} imageSource={{uri: 'http://grupa.co.rs/wp-content/uploads/2015/02/home_slideshow_slide-1-2-3.png' }} />

                <View padding-20>
                <Text text40 color={Colors.dark10}>
                    BRENDIRANJE
                </Text>
                <View row>
                    <Text text90 color={'green'}>
                    Publish
                    </Text>
                    <Text text90> | 30.Avgust 2019</Text>
                </View>

                <Text text70 color={Colors.dark10}>
                    Opis opis opis ipos
                </Text>

                <View>
                    <Text text90 color={Colors.dark50}>
                        Likes
                    </Text>
                    <View row right>
                    <Button style={{marginRight: 10}} text90 link label="Feature" />
                    <Button text90 link  label="Share" />
                    </View>
                </View>
                </View>
            </Card>
        </View>
    );
}

export default BannersAll;