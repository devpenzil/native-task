import {View, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';

const Events = () => {
  const pressed = useSharedValue(false);
  const eventhandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });
  const animate = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? 'yellow' : 'blue',
      transform: [{scale: withSpring(pressed.value ? 1.2 : 1)}],
    };
  });
  return (
    <View style={style.container}>
      <TapGestureHandler onGestureEvent={eventhandler}>
        <Animated.View style={[style.card, animate]} />
      </TapGestureHandler>
    </View>
  );
};

export default Events;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'indigo',
    borderRadius: 100,
  },
  text: {
    marginTop: 20,
  },
});
