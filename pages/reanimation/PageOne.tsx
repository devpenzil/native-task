import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const PageOne = () => {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    console.log(offset.value * 255);

    return {
      transform: [
        {
          //   translateX: withSpring(offset.value * 255, {
          //     damping: 20,
          //     stiffness: 90,
          //   }),
          rotateZ: withSpring(`${offset.value}deg`),
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedStyle]} />
      <Text
        style={styles.text}
        onPress={() => (offset.value = withRepeat(withTiming(40), 6, true))}>
        click here..
      </Text>
    </View>
  );
};

export default PageOne;
const styles = StyleSheet.create({
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
    borderRadius: 10,
  },
  text: {
    marginTop: 20,
  },
});
