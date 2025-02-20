import { colors, fontSizes, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type IconNames = keyof typeof MaterialIcons.glyphMap;

type BadgeProps = {
  icon: IconNames;
  text: string;
};

export const Badge: FC<BadgeProps> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={20} color={colors.gray[500]} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.gray[100],
    paddingVertical: paddings.xs,
    borderRadius: radius.sm,
  },
  text: {
    color: colors.gray[500],
    fontSize: fontSizes.xlarge,
    fontWeight: 'regular',
  },
});
