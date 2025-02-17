import { Button } from '@/presentation/atomic/atoms/Button';
import { ScreenTemplate } from '@/presentation/atomic/templates/ScreenTemplate';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Home() {
  return (
    <ScreenTemplate title="Home" canGoBack={true}>
      <Button text="Button" />
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({});
