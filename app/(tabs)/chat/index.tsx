import { ScreenTemplate } from '@/presentation/atomic/templates/ScreenTemplate';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
const Chat = () => {
  return (
    <ScreenTemplate title="Home" canGoBack={true}>
      <Text>chat</Text>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({});

export default Chat;
