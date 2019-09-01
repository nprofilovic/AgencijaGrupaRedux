import React from 'react';
import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; 

const Banner = (props) => {
    return (
        <View>
            <Card style={{marginBottom: 15, margin:15}} onPress={() => {}}>
                <View padding-20>
                    <Text text70 dark10>
                        {props.headerText}
                    </Text>

                    <Text text90 dark50>
                        {props.bodyText}
                    </Text>
                </View>
                <Card.Image height={props.height} imageSource={{uri: props.image }} />
            </Card>
            
        </View>
    );
}

export default Banner;