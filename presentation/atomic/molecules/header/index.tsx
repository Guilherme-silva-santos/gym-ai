import { colors, fontSizes, paddings } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import exercise from '../../../../assets/images/react-logo.png';

type HeaderProps = {
  title: string;
  canGoBack?: boolean;
  onGoBack?: () => void;
};

export const Header: FC<HeaderProps> = ({ title, canGoBack, onGoBack }) => {
  return (
    <View style={styles.container}>
      {canGoBack ? (
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.8}
          onPress={onGoBack}
        >
          <MaterialIcons name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Image
        source={exercise}
        style={{
          width: 76,
          height: 30,
        }}
      />
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddings.sm,
    paddingVertical: paddings.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontSize: fontSizes.xxlarge,
    fontWeight: 'bold',
    flex: 1,
    color: colors.white,
  },
  iconContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    width: 40,
  },
});
