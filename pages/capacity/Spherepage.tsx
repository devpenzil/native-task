/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const Spherepage = ({children}: any) => {
  const triggeranimation = useSharedValue(false);
  useEffect(() => {
    setTimeout(() => {
      triggeranimation.value = true;
    }, 2000);
  }, []);

  const s1 = useAnimatedStyle(() => {
    return {
      top: withSpring(triggeranimation.value ? 400 : 150),
      left: withSpring(triggeranimation.value ? 100 : 140),
    };
  });
  const s2 = useAnimatedStyle(() => {
    return {
      top: withSpring(triggeranimation.value ? 350 : 100),
      left: withSpring(triggeranimation.value ? 200 : 150),
    };
  });
  const s3 = useAnimatedStyle(() => {
    return {
      top: withSpring(triggeranimation.value ? 250 : 150),
      left: withSpring(triggeranimation.value ? 250 : 100),
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.s1, s1]} />
      <Animated.View style={[styles.s2, s2]} />
      <Animated.View style={[styles.s3, s3]} />
      {children}
    </View>
  );
};

export default Spherepage;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  s1: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
    position: 'absolute',
  },
  s2: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 50,
    position: 'absolute',
  },
  s3: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 50,
    position: 'absolute',
  },
});
