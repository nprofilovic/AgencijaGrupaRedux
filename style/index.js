import { Dimensions } from 'react-native';
import { create } from 'react-native-platform-stylesheet';

const { width, height } = Dimensions.get('screen');
let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

export const styles = create({
    flex: {
        ios: {
            flex: 1,
        },
        android: {
            flex: 1
        }
       
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    header: {
        ios: {
            backgroundColor: 'white',
            paddingTop:56,
            paddingHorizontal: 36,
            paddingBottom: 24,
        },
        android: {
            backgroundColor:'white',
            paddingTop: 40,
            paddingHorizontal: 26,
            paddingBottom: 14,
            
        }
        
    },
    headerSection: {
        ios:{
            justifyContent: 'space-between',
            alignItems: 'center',
        }, 
        android: {
            justifyContent: 'space-between',
            alignItems: 'center',
        }
        

    },
    article: {
      //  paddingHorizontal: 36,

    },
    articleStaffs: {
       // paddingHorizontal: 36,
  
    },
    articleStaff: {
        ios: {
            width: width - (36 * 2),
            marginHorizontal: 36,
            padding: 36,
            borderRadius: 12,
            overflow: 'visible',
            // backgroundColor: 'pink',
            // position: 'relative'
        },
        android: {
            
            width: imageWidth,
            height:imageHeight,
            marginHorizontal: 26,
            padding: 153,
            borderRadius: 15,
            overflow: 'visible',
            // backgroundColor: 'pink',
            position: 'relative'
        }
        
    },
    flatlist: {
        ios: {
            overflow:'visible', 
            height: 280
        },
        android: {
            overflow:'visible', 
            height: 480
        }
    },
    articleInfo: {
        ios: {
            position: 'absolute',
            paddingHorizontal: 36,
            paddingVertical:24,
            bottom: -36,
            right: 36,
            left: 36,
            borderRadius: 12,
            backgroundColor:'white',
        },
        android: {
            position: 'absolute',
            paddingHorizontal: 36,
            paddingVertical:24,
            bottom: -36,
            right: 36,
            left: 36,
            borderRadius: 12,
            backgroundColor:'white',
            
        }
        
    },
    shadow: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width:0,
                height:6,
            },
            shadowOpacity: 0.1,
            shadowRadius:4
        },
        android: {
            elevation: 1
        }
    },
    recommended: {
        ios: {
            padding: 36,
        },
        android: {
           
            marginBottom:-140
        }
    }
    
})