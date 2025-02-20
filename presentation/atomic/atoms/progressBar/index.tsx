import { colors, fontSizes, paddings, radius } from '@/theme';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const ProgressBar = ({ progress }: { progress: number }) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(Math.min(progress, 100), {
      duration: 500,
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedValue.value}%`,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <Text style={styles.text}>{`${progress}%`}</Text>
        <Animated.View
          style={[styles.progressBar, animatedStyle]}
        ></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: paddings.md,
  },
  progressBarBackground: {
    width: '100%',
    height: 20,
    backgroundColor: colors.gray[200],
    borderRadius: radius.sm,
  },
  progressBar: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
  },
  text: {
    color: colors.gray[700],
    textAlign: 'center',
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: paddings.md,
  },
});
