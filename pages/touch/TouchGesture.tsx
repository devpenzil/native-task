import {View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const TouchGesture = () => {
  const pressed = useSharedValue(false);
  console.log(pressed);

  const tapEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      console.log('event => started ');
    },
    onActive: (event, ctx) => {
      console.log('event => Its working');
    },

    onEnd: (event, ctx) => {
      pressed.value = false;
      console.log('event => Stopped ');
    },
  });
  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: withSpring(pressed.value ? 1.2 : 1)}],
    };
  });
  return (
    <View style={[t.wFull, t.hFull]}>
      <PanGestureHandler onGestureEvent={tapEvent}>
        <Animated.View
          style={[t.w20, t.h20, t.bgBlue500, t.roundedFull, circleStyle]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default TouchGesture;
