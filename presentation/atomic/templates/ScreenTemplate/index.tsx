import { colors, paddings, radius } from '@/theme';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../../molecules/header';

type ScreenTemplateProps = {
  children: React.ReactNode;
  title: string;
  canGoBack?: boolean;
  onGoBack?: () => void;
};
export const ScreenTemplate: FC<ScreenTemplateProps> = ({
  children,
  title,
  canGoBack,
  onGoBack,
}) => {
  return (
    <View style={styles.container}>
      <Header title={title} canGoBack={canGoBack} onGoBack={onGoBack} />
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  children: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: radius.xxl,
    borderTopLeftRadius: radius.xxl,
    paddingHorizontal: paddings.xl,
    paddingVertical: paddings.sm,
  },
});
