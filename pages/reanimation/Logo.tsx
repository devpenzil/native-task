/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  FadeOut,
  Keyframe,
  withDelay,
} from 'react-native-reanimated';

const Logo = () => {
  const [showBanner, setShowBanner] = useState(false);
  const trigger = useSharedValue(false);
  useEffect(() => {
    setTimeout(() => {
      trigger.value = true;
    }, 1000);
  }, []);
  const animationStyle = useAnimatedStyle(() => {
    console.log(trigger);
    return {
      transform: [
        {
          scale: withTiming(trigger.value ? 30 : 1, {
            duration: 1000,
          }),
        },
        {
          rotateZ: withTiming(trigger.value ? '360deg' : '0deg', {
            duration: 1000,
          }),
        },
      ],
    };
  });
  return (
    <View style={style.container}>
      {showBanner ? (
        <View>
          <Text>Hello</Text>
        </View>
      ) : (
        <Animated.Image
          source={require('../../assets/logo.png')}
          style={[style.logo, animationStyle]}
        />
      )}
    </View>
  );
};

export default Logo;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
