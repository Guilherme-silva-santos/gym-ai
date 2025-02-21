import { colors, fontSizes, paddings, radius } from '@/theme';
import { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { ProgressBar } from '../../atoms/progressBar';

type ExerciseCardProps = TouchableOpacityProps & {
  title: string;
  reps: string;
  progress: number;
  image?: ImageSourcePropType | undefined;
};

export const ExerciseCard: FC<ExerciseCardProps> = ({
  title,
  reps,
  progress,
  image,
  ...rest
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSizes.xlarge }}>
          {title}
        </Text>
        <Text style={{ fontSize: fontSizes.large }}>{reps}</Text>
        <ProgressBar progress={progress ?? 0} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: radius.sm,
    flexDirection: 'row',
    backgroundColor: colors.gray[100],
    gap: 8,
    padding: paddings.md,
  },
  imageContainer: {
    width: '30%',
    height: 120,
    backgroundColor: colors.gray[200],
    borderRadius: radius.sm,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: '70%',
    justifyContent: 'space-between',
  },
});
