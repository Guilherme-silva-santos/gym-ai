import { colors, paddings, radius } from '@/theme';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

type ScreenTemplateProps = {
  children: React.ReactNode;
};
export const ScreenTemplate: FC<ScreenTemplateProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00030c',
  },
  children: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: radius.xxl,
    borderTopLeftRadius: radius.xxl,
    paddingHorizontal: paddings.sm,
    paddingVertical: paddings.sm,
  },
});
