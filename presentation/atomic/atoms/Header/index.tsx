import { colors, fontSizes, paddings } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
  canGoBack?: boolean;
};

export const Header: FC<HeaderProps> = ({ title, canGoBack }) => {
  return (
    <View style={styles.container}>
      {canGoBack ? (
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[200],
    padding: paddings.sm,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontSize: fontSizes.xxlarge,
    flex: 1,
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
