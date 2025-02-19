import { ScreenTemplate } from '@/presentation/atomic/templates/ScreenTemplate';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
const Workouts = () => {
  return (
    <ScreenTemplate title="Workouts" canGoBack={true}>
      <Text>Workouts</Text>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({});

export default Workouts;
