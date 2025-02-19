import { ScreenTemplate } from '@/presentation/atomic/templates/ScreenTemplate';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
const Home = () => {
  return (
    <ScreenTemplate title="Home" canGoBack={true}>
      <Text>Home</Text>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({});

export default Home;
