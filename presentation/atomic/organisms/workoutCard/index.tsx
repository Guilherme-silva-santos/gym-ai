import { colors, fontSizes, paddings, radius } from '@/theme';
import { FC } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type WorkoutCardProps = TouchableOpacityProps & {
  title?: string;
  text?: string;
  image?: ImageSourcePropType | string;
};
export const WorkoutCard: FC<WorkoutCardProps> = ({
  title,
  text,
  image,
  ...rest
}: WorkoutCardProps) => {
  const imageSource = typeof image === 'string' ? { uri: image } : image;
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <View style={styles.banner}>
        <Image source={imageSource} />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text} numberOfLines={6}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 'auto',
    padding: paddings.sm,
    backgroundColor: colors.gray[100],
    borderRadius: radius.sm,
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
  information: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.xlarge,
    fontWeight: 'bold',
  },
  text: {
    fontSize: fontSizes.large,
  },
});
