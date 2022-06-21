import {StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './splash.style';
import Animated, {
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import JumbingText from './JumbingText';

const Splash = () => {
  const [logohide, setLogohide] = useState(false);
  const triggerlogo = useSharedValue(false);

  useEffect(() => {
    setTimeout(() => {
      triggerlogo.value = true;
    }, 1500);
    setTimeout(() => {
      setLogohide(true);
    }, 2500);
  }, []);

  const logoanimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(triggerlogo.value ? 30 : 1, {
            duration: 1000,
          }),
        },
        {
          rotateZ: withTiming(triggerlogo.value ? '360deg' : '0deg', {
            duration: 1000,
          }),
        },
      ],
    };
  });
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.container}>
        {logohide ? (
          <JumbingText />
        ) : (
          <Animated.Image
            source={require('../../assets/logo.png')}
            style={[styles.logo, logoanimation]}
            exiting={FadeOut}
          />
        )}
      </View>
    </>
  );
};

export default Splash;
