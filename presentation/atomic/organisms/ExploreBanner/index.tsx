import { colors, fontSizes, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ExploreBannerProps = {
  text: string;
  image: ImageSourcePropType | string;
  title: string;
  onPressButton?: () => void;
};
export const ExploreBanner: FC<ExploreBannerProps> = ({
  text,
  image,
  onPressButton,
  title,
}) => {
  const imageSource = typeof image === 'string' ? { uri: image } : image;
  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={onPressButton}
          >
            <Text style={styles.text}>{text}</Text>
            <MaterialIcons
              name="chevron-right"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: radius.sm,
    backgroundColor: colors.gray[100],
  },
  image: {
    width: '100%',
    height: 170,
  },
  infoContainer: {
    height: '100%',
    justifyContent: 'space-between',
    padding: paddings.xl,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: fontSizes.xxxlarge,
    color: colors.white,
    fontWeight: 'bold',
  },
  text: {
    fontSize: fontSizes.xlarge,
    color: colors.primary,
    fontWeight: 'bold',
  },
});
