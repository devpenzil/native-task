import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import React from 'react';

const DayTwo = () => {
  const triggerAnimation = useSharedValue(true);
  const firstCardAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(triggerAnimation.value ? -180 : 0),
        },
        {
          rotateZ: withSpring(triggerAnimation.value ? '10deg' : '0deg'),
        },
        {translateX: withSpring(triggerAnimation.value ? 80 : 0)},
      ],
    };
  });
  const secondCardAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(triggerAnimation.value ? 180 : 0),
        },
        {
          rotateZ: withSpring(triggerAnimation.value ? '-20deg' : '0deg'),
        },
        {translateX: withSpring(triggerAnimation.value ? -60 : 0)},
      ],
    };
  });
  const thirdCardAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(triggerAnimation.value ? 1.2 : 1),
        },
        {
          rotateZ: withSpring(triggerAnimation.value ? '-20deg' : '0deg'),
        },
      ],
    };
  });
  const sphereone = useAnimatedStyle(() => {
    return {
      top: withSpring(triggerAnimation.value ? '20%' : '3%'),
      left: withSpring(triggerAnimation.value ? '20%' : '3%'),
      display: triggerAnimation.value ? 'flex' : 'none',
    };
  });
  console.log(triggerAnimation);
  return (
    <View style={style.conatiner}>
      <Animated.View style={[style.card, firstCardAnimation]} />
      <Animated.View style={[style.card, thirdCardAnimation]}>
        <Button
          title="start"
          onPress={() => {
            triggerAnimation.value = !triggerAnimation.value;
            console.log(triggerAnimation);
          }}
        />
      </Animated.View>
      <Animated.View style={[style.card, secondCardAnimation]} />
      <Animated.View style={[style.sphere, sphereone]} />
    </View>
  );
};

export default DayTwo;
const style = StyleSheet.create({
  conatiner: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 40,
  },
  card: {
    backgroundColor: 'red',
    width: '100%',
    flex: 1,
    marginVertical: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sphere: {
    width: 40,
    height: 40,
    borderColor: 'yellow',
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 2,
  },
});
