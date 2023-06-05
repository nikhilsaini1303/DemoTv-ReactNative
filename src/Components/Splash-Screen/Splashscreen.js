import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Videoplayer from '../Video-Player/Videoplayer';
// import Logo from '../../assests/icon.jpg';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Videoplayer from '../Video-Player/VideoPlayer';

const Splashscreen = () => {

  // const height = Dimensions.get('window').height;
  // const width = Dimensions.get('window').width;
  // const edges = useSafeAreaInsets();

  // // Animation values.
  // const startAnimation = useRef(new Animated.Value(0)).current;

  // //Scaling Down Both logo and title.
  // const scaleLogo = useRef(new Animated.Value(1)).current;
  // const scaleTitle = useRef(new Animated.Value(1)).current;

  // //Offset Animation.
  // const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0})).current;
  // const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0})).current;

  // //Animating Content.
  // const contentTransition = useRef(new Animated.Value(height)).current;

  //Animation Done.
  useEffect(() => {
    SplashScreen.hide();

    //Starting Animation after 500ms.

    // setTimeout(() => {

      //Parallel Animation.
    //   Animated.parallel([
    //     Animated.timing(
    //       startAnimation, 
    //       {
    //         //For same height for non safe area devices.
    //         toValue: -height + (edges.top + 65),
    //         useNativeDriver: true
            
    //       }
    //     ),
    //     Animated.timing(
    //       scaleLogo,
    //       {
    //         //Scaling to 0.35
    //         toValue: 0.3,
    //         useNativeDriver: true
    //       }
    //     ),
    //     Animated.timing(
    //       scaleTitle, 
    //       {
    //         //Scaling to 0.8 
    //         toValue: 0.8,
    //         useNativeDriver: true           
    //       }
    //     ),
    //     Animated.timing(
    //       moveLogo, 
    //       {
    //         //Moving to Right Most
    //         toValue: {
    //           x: (width / 2) - 35,
    //           y: (height / 2) - 5
    //         },
    //         useNativeDriver: true           
    //       }
    //     ),
    //     Animated.timing(
    //       moveTitle, 
    //       {
    //         //Moving to Right Most
    //         toValue: {
    //           x: 0,
    //           //Sicne image size is 100.
    //           y: (height / 2) - 90
    //         },
    //         useNativeDriver: true           
    //       }
    //     ),
    //     Animated.timing(
    //       contentTransition, 
    //       {
    //         toValue: 0,
    //         useNativeDriver: true           
    //       }
    //     ),
    //   ])
    //   .start();
    // }, 500);

  },[])

  return (
    <View>
        {/* <Animated.View style={[styles.splash, {
          transform: [
            { translateY: startAnimation }
          ]
        }]}>
          <Animated.View style={styles.contIma}>
            <Animated.Image 
              style={[styles.image, 
                { transform: [ 
                    { translateX: moveLogo.x },
                    { translateY: moveLogo.y },
                    { scale: scaleLogo },
                  ] 
                }]} 
              source={Logo} 
            />
            <Animated.Text 
              style={[styles.text,
                {
                  transform: [
                    {translateY: moveTitle.y},
                    {scale: scaleTitle}
                  ]
                }
              ]}
            >
                Movie App
            </Animated.Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}> */}

          <Videoplayer />

            {/* </Animated.View> */}
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
    container : {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    splash : {
      flex: 1,
      backgroundColor: '#7754eb',
      zIndex: 1,
    },
    contIma: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image :{ 
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff'
    }
})

