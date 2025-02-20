import { colors, margins, radius } from '@/theme';
import { FC } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import { Badge } from '../../atoms/badge';
import { PlayerContolButton } from '../../atoms/playerContollButton';

type WorkoutCardProps = {
  time: string;
  kcal: string;
  onpressButton: () => void;
  image: ImageSourcePropType | string;
};
export const WorkoutCard: FC<WorkoutCardProps> = ({
  kcal,
  time,
  onpressButton,
  image,
}: WorkoutCardProps) => {
  const imageSource = typeof image === 'string' ? { uri: image } : image;
  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}>
        <View style={styles.infoContainer}>
          <View style={styles.badge}>
            <Badge icon="local-fire-department" text={kcal} />
            <Badge icon="timer" text={time} />
          </View>
          <View style={styles.button}>
            <PlayerContolButton icon="play-arrow" onPress={onpressButton} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    borderRadius: radius.sm,
    backgroundColor: colors.gray[500],
  },
  image: {
    width: '100%',
    height: 170,
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
  button: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: margins.sm,
  },
});
