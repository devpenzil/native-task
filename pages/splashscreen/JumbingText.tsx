/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  FadeInUp,
  withSpring,
  useSharedValue,
  BounceInRight,
} from 'react-native-reanimated';
import {animeFirst} from './animationstyles';

const JumbingText = () => {
  const trigger = useSharedValue(0);
  let animStyle;
  useEffect(() => {
    setTimeout(() => {
      trigger.value = 40;
    }, 1200);
  }, []);
  const some = animeFirst(trigger.value);
  console.log('some =>', some);
  animStyle = useAnimatedStyle(() => {
    console.log({trigger});
    return some;
  });
  console.log('animstyle =>', animStyle);
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
          A
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(400)}>
          p
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(400)}>
          p
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(400)}>
          l
        </Animated.Text>
        <Animated.Text
          style={style.inditext}
          entering={BounceInRight.delay(600)}>
          e
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default JumbingText;
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
    width: 80,
    height: 80,
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
