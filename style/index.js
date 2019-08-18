import { Dimensions } from 'react-native';
import { create } from 'react-native-platform-stylesheet';

const { width, height } = Dimensions.get('screen');


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

            width: width - (30 * 2),
            marginHorizontal: 26,
            padding: 36,
            borderRadius: 15,
            overflow: 'visible',
            // backgroundColor: 'pink',
            
        }
        
    },
    flatlist: {
        ios: {
            overflow:'visible', 
            height: 280
        },
        android: {
            overflow:'visible', 
            height: 300
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
            elevation: 4
        }
    },
    recommended: {
        ios: {
            padding: 36,
        },
        android: {
            padding:36,
            //marginTop:-170
        }
    },
    recomendation: {
        ios: {
            width: (width - (36 * 2)) / 2,
            marginHorizontal: 8,
            backgroundColor: 'white',
            overflow: 'hidden',
            borderRadius: 12,
            marginVertical: 36 * 0.5,
        },
        android: {
            width: (width - (36 * 2)) / 2,
            marginHorizontal: 8,
            backgroundColor: 'white',
            overflow: 'hidden',
            borderRadius: 12,
            marginVertical: 36 * 0.5,
        }
    },
    recommendedList: {
        ios: {
            justifyContent: 'space-between', 
            alignItems: 'flex-end', 
            marginBottom: 36,
            paddingTop: 20
        },
        android: {
            justifyContent: 'space-between', 
            alignItems: 'flex-end', 
            marginBottom: 36,
            paddingTop: 20
        }
    },
    recommendedImage: {
        ios: {
            width: (width - (36 * 2)) / 2,
            height: (width - (36 * 2)) / 2,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            marginRight: 18
            
            
        },
        android: {
            width: (width - (36 * 2)) / 2,
            height: (width - (36 * 2)) / 2,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            marginRight: 18,
            
        }
    },
    recommendationHeader: {
        ios: {
            overflow: 'hidden',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
        },
        android:{
            overflow: 'hidden',
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
        }
        
    },
    recommendationOptions: {
        ios: {
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 18,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        },
        android: {
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 18,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        }
        
    },
    
})

// Styles for Artical Components


export const stylesArtical = create({
    flex: {
        ios: {
            flex: 1
        },
        android: {
            flex: 1
        }
    },
    column: {
        ios: {
            flexDirection: 'column',
        },
        android: {
            flexDirection: 'column'
        }
    },
    row: {
        ios: {
            flexDirection: 'row',
        },
        android: {
            flexDirection: 'row'
        }
    },
    header: {
        ios: {
            paddingHorizontal: 36,
            paddingTop: 36,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,

        },
        android: {
            paddingHorizontal: 36,
            paddingTop: 36,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        }
    },
    back: {
        ios: {
            width: 16 * 3,
            height: 16 * 3,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        android: {
            width: 16 * 3,
            height: 16 * 3,
            justifyContent: 'center',
            alignItems: 'flex-start',
        }
    },
    content: {
        ios: {
            // backgroundColor: '#007BFA',
            // borderTopLeftRadius: theme.sizes.border,
            // borderTopRightRadius: theme.sizes.border,
        },
        android: {
            
        }
    },
        
    contentHeader: {
        ios: {
            backgroundColor: 'transparent',
            padding: 36,
            backgroundColor: 'white',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            marginTop: -18,
        },
        android: {
            backgroundColor: 'transparent',
            padding: 36,
            backgroundColor: 'white',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            marginTop: -18,
        }
        
      },
    shadow: {
        ios: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        },
        android: {
            elevation: 2
        }
        
      },
    title: {
        ios:{
            fontSize: 28,
            fontWeight: 'bold'
        },
        android: {
            fontSize: 28,
            fontWeight: 'bold'
        }
      },
    description: {
        ios: {
            fontSize: 14 * 1.2,
            lineHeight: 14 * 2,
            color: '#BCCCD4'
        },  
        android: {
            fontSize: 14 * 1.2,
            lineHeight: 14 * 2,
            color: '#BCCCD4'
        }
      }

})