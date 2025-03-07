import { margins, radius } from '@/theme';
import { FC } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Badge } from '../../atoms/badge';

type PreviewVideoCardProps = TouchableOpacityProps & {
  time: string;
  kcal: string;
  image: ImageSourcePropType | string;
};
export const PreviewVideoCard: FC<PreviewVideoCardProps> = ({
  kcal,
  time,
  image,
  ...rest
}: PreviewVideoCardProps) => {
  const imageSource = typeof image === 'string' ? { uri: image } : image;
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.8}>
      <ImageBackground
        resizeMode="cover"
        source={imageSource}
        style={styles.image}
      >
        <View style={styles.infoContainer}>
          <View style={styles.badge}>
            <Badge icon="local-fire-department" text={kcal} />
            <Badge icon="timer" text={time} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    borderRadius: radius.xxl,
  },
  image: {
    height: 170,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  badge: {
    width: '40%',
    height: '100%',
    justifyContent: 'flex-end',
    gap: 4,
    padding: margins.sm,
  },
  infoContainer: {
    flexDirection: 'row',
  },
});
