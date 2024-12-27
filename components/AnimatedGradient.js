import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AnimatedGradient({ colors }) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(1, {
        duration: 10000,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      rotation.value,
      [0, 1],
      [0, 360]
    );

    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <AnimatedLinearGradient
      colors={colors}
      style={[styles.gradient, animatedStyle]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: -width,
    right: -width,
    top: -height,
    bottom: -height,
    width: width * 3,
    height: height * 3,
  },
}); 