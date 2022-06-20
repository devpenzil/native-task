/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  FadeInRight,
  FadeInUp,
  withDelay,
  withSpring,
  useSharedValue,
  BounceInRight,
  BounceInUp,
} from 'react-native-reanimated';

const TextPage = () => {
  const trigger = useSharedValue(0);
  useEffect(() => {
    setTimeout(() => {
      trigger.value = 40;
    }, 1200);
  }, []);
  const animStyle = useAnimatedStyle(() => {
    console.log(trigger);
    return {
      transform: [
        {
          translateX: withSpring(trigger.value === 40 ? 0 : -40),
        },
      ],
    };
  });
  return (
    <View style={style.container}>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={style.logo}
        entering={FadeInUp.delay(1400)}
      />
      <Animated.View style={[style.textpla, animStyle]}>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(200)}>
          H
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(400)}>
          e
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(400)}>
          l
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(400)}>
          l
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(600)}>
          o
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default TextPage;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textpla: {
    display: 'flex',
    flexDirection: 'row',
  },
  inditext: {
    fontSize: 60,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});
