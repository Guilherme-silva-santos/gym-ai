import { colors, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

type IconNames = keyof typeof MaterialIcons.glyphMap;
type InputProps = TextInputProps & {
  placeholder: string;
  icon?: IconNames;
};

export const Input: FC<InputProps> = ({ placeholder, icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialIcons name={icon} size={20} color={colors.gray[500]} />}
      <TextInput
        placeholderTextColor={colors.gray[500]}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    gap: 8,
    paddingHorizontal: paddings.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: radius.sm,
  },
});
