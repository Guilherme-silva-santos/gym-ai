import { colors, fontSizes, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ChallengeBadgeProps = TouchableOpacityProps & {
  text: string;
};
export const ChallengeBadge: FC<ChallengeBadgeProps> = ({ text, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <MaterialIcons name="emoji-events" size={24} color="white" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: 100,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    padding: paddings.md,
    borderRadius: radius.sm,
  },
  text: {
    width: '90%',
    textAlign: 'left',
    color: colors.gray[100],
    fontWeight: 'bold',
    fontSize: fontSizes.xlarge,
  },
});
