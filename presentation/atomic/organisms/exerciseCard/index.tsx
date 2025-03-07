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

type ExerciseCardProps = TouchableOpacityProps & {
  title: string;
  reps: string;
  image: ImageSourcePropType | string;
};

export const ExerciseCard: FC<ExerciseCardProps> = ({
  title,
  reps,
  image,
  ...rest
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={image} width={10} height={10} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={{ fontWeight: 'bold', fontSize: fontSizes.xlarge }}>
          {title}
        </Text>
        <Text style={{ fontSize: fontSizes.large, color: colors.gray[500] }}>
          {reps}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: paddings.sm,
    borderRadius: radius.sm,
    flexDirection: 'row',
    backgroundColor: colors.gray[100],
    gap: 8,
  },
  imageContainer: {
    backgroundColor: colors.gray[200],
    borderRadius: radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    padding: paddings.sm,
    aspectRatio: 1,
  },
  infoContainer: {
    width: '70%',
    justifyContent: 'center',
    gap: 12,
  },
});
