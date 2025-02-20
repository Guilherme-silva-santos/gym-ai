import { colors, paddings } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Iconnames = keyof typeof MaterialIcons.glyphMap;

type PlayerContolButtonProps = TouchableOpacityProps & {
  icon: Iconnames;
};

export const PlayerContolButton: FC<PlayerContolButtonProps> = ({
  icon,
  ...rest
}) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={24} color={colors.black} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    padding: paddings.md,
    backgroundColor: colors.primary,
    borderRadius: 999,
    alignItems: 'center',
  },
});
